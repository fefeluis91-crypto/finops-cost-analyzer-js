const { processarFatura } = require('./logica');

test('Deve identificar quando a fatura estoura o limite de 2000', () => {
    const faturaSimulada = [
        { servico: 'Serviço A', custo: 1500 },
        { servico: 'Serviço B', custo: 600 }
    ];

    const resultado = processarFatura(faturaSimulada);

    expect(resultado.total).toBe(2100);
    expect(resultado.status).toBe('OVER BUDGET');
    expect(resultado.vilao).toBe('Serviço A');
});

test('Deve lidar com uma fatura vazia sem quebrar', () => {
    const faturaVazia = [];
    const resultado = processarFatura(faturaVazia);

    expect(resultado.total).toBe(0);
    expect(resultado.status).toBe('WITHIN BUDGET');
    expect(resultado.vilao).toBe('Nenhum');
});