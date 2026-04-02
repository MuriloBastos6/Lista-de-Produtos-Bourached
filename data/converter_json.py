import pandas as pd
import json
from pathlib import Path


def converter_xlsx_para_json():
    """Converte o XLSX formatado para JSON estruturado para React"""

    base_dir = Path(__file__).resolve().parents[1]
    xlsx_path = base_dir / 'data' / 'ProdutosFomatodos.xlsx'
    json_output = base_dir / 'public' / 'produtos.json'

    # Garantir que a pasta de output existe
    json_output.parent.mkdir(parents=True, exist_ok=True)

    if not xlsx_path.exists():
        raise FileNotFoundError(f'Arquivo XLSX nao encontrado: {xlsx_path}')

    print("📖 Lendo arquivo XLSX formatado...")

    # Ler arquivo
    xls = pd.ExcelFile(xlsx_path)

    resultado = {}
    total_produtos = 0

    print("🔄 Convertendo cada categoria...")

    for nome_aba in xls.sheet_names:
        # Ler dados da aba
        df = pd.read_excel(xls, sheet_name=nome_aba)

        # Agrupar por produto_grupo
        agrupados = {}

        for _, row in df.iterrows():
            # Pular linhas com dados inválidos
            if pd.isna(row['produto_grupo']) or pd.isna(row['descricao']):
                continue

            chave = row['produto_grupo']

            if chave not in agrupados:
                agrupados[chave] = {
                    'id': chave,
                    'descricao': str(row['descricao']).strip(),
                    'categoria': nome_aba,
                    'variacoes': []
                }

            # Adicionar variação
            variacao = {
                'codigo': str(int(row['codigo'])) if pd.notna(row['codigo']) else '',
                'pesoValor': float(row['peso_valor']) if pd.notna(row['peso_valor']) else 0,
                'pesoUnidade': str(row['peso_unidade']).strip() if pd.notna(row['peso_unidade']) else '',
                'unidade': str(row['unidade']).strip() if pd.notna(row['unidade']) else '',
                'precoVenda': float(row['preco_venda']) if pd.notna(row['preco_venda']) else 0.0
            }

            agrupados[chave]['variacoes'].append(variacao)

        # Ordenar variações por peso
        for produto in agrupados.values():
            produto['variacoes'] = sorted(
                produto['variacoes'],
                key=lambda x: x['pesoValor']
            )

        # Converter dict para lista e adicionar ao resultado
        produtos_lista = list(agrupados.values())
        resultado[nome_aba] = produtos_lista

        print(f"  ✅ {nome_aba}: {len(produtos_lista)} produtos únicos")
        total_produtos += len(produtos_lista)

    # Salvar JSON
    print(f"\n💾 Salvando JSON em: {json_output}")
    with open(json_output, 'w', encoding='utf-8') as f:
        json.dump(resultado, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Conversão concluída!")
    print(f"📊 Resumo:")
    print(f"   - Total de categorias: {len(resultado)}")
    print(f"   - Total de produtos únicos (agrupados): {total_produtos}")
    print(f"\n📄 Arquivo criado: {json_output}")

    # Mostrar exemplo do JSON
    print("\n📋 Exemplo de estrutura (primeiros 2 produtos da primeira categoria):")
    primeira_categoria = list(resultado.values())[0]
    exemplo = json.dumps(primeira_categoria[:2], ensure_ascii=False, indent=2)
    print(exemplo)


if __name__ == '__main__':
    converter_xlsx_para_json()
