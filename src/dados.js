// Os produtos e as imagens ficam no repositório bourached-dados, compartilhado
// pelos sites. A URL vem do .env (VITE_PRODUTOS_URL).
export const PRODUTOS_URL =
  import.meta.env.VITE_PRODUTOS_URL || "https://bourached-dados.vercel.app/produtos.json";

// Loja de Santo Amaro: soma o acréscimo das variações marcadas no painel.
export const SANTO_AMARO = import.meta.env.VITE_SANTO_AMARO === "true";

function aplicarAcrescimoSantoAmaro(dados) {
  const resultado = {};
  for (const [categoria, produtos] of Object.entries(dados)) {
    resultado[categoria] = Array.isArray(produtos)
      ? produtos.map((produto) => ({
          ...produto,
          variacoes: (produto.variacoes || []).map((v) => {
            const acrescimo = Number(v.acrescimoSantoAmaro);
            if (!acrescimo) return v;
            return { ...v, precoVenda: Math.round((Number(v.precoVenda) + acrescimo) * 100) / 100 };
          }),
        }))
      : produtos;
  }
  return resultado;
}

export async function buscarProdutos() {
  const response = await fetch(PRODUTOS_URL, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error("Falha ao carregar produtos");
  }
  const dados = await response.json();
  return SANTO_AMARO ? aplicarAcrescimoSantoAmaro(dados) : dados;
}

// As imagens no JSON são caminhos como "/images/graos/arroz.jpg"; elas ficam
// no mesmo servidor do produtos.json.
export function urlImagemProduto(caminho = "") {
  const limpo = String(caminho || "").trim();
  if (!limpo || limpo === "/arroz.jpeg") return limpo;
  try {
    return new URL(limpo, PRODUTOS_URL).href;
  } catch {
    return limpo;
  }
}
