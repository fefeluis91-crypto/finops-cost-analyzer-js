// logica.js
function processarFatura(fatura) {
    let totalGeral = 0;
    let maiorGasto = { custo: 0, servico: 'Nenhum' };

    fatura.forEach(item => {
        totalGeral += item.custo;
        if (item.custo > maiorGasto.custo) {
            maiorGasto = item;
        }
    });

    const limite = 2000;
    return {
        total: totalGeral,
        status: totalGeral > limite ? 'OVER BUDGET' : 'WITHIN BUDGET',
        vilao: maiorGasto.servico
    };
}

module.exports = { processarFatura };