import React from 'react';

function BlocoDados(props) {
    return (
        <div className="bloco-de-dados">
            <div className='dados-com-img'>
                <img src="/bourached-350.png" alt="Logo-bourached"/>
                <h2>Variedade de produtos</h2>
                <p>mais de 1000 produtos disponíveis</p>
            </div>
            <div className='dados-com-img'>
                <img src="/bourached-350.png" alt="Logo-bourached"/>
                <h2>Produtos envasados</h2>
                <p>5KG|10KG|20KG|25KG|30KG|</p>
            </div>
        </div>

    );
}

export default BlocoDados;