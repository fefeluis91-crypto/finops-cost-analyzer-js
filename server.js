const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Módulo para ler arquivos
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/analisar-fatura', (req, res) => {
    // 1. Lê o arquivo JSON
    const data = fs.readFileSync('./fatura.json', 'utf8');
    const fatura = JSON.parse(data);

    // 2. Lógica de FinOps: Somar tudo e achar o maior gasto
    let totalGeral = 0;
    let maiorGasto = { custo: 0 };

    fatura.forEach(item => {
        totalGeral += item.custo;
        if (item.custo > maiorGasto.custo) {
            maiorGasto = item;
        }
    });

    const limite = 2000;
    const status = totalGeral > limite ? 'OVER BUDGET' : 'WITHIN BUDGET';

    // 3. Devolve um relatório completo
    res.json({
        total: totalGeral,
        limite: limite,
        status: status,
        excesso: totalGeral > limite ? totalGeral - limite : 0,
        vilao: maiorGasto.servico,
        detalhes: fatura
    });
});

app.listen(port, () => {
    console.log(`🚀 Analisador FinOps rodando em http://localhost:${port}`);
});