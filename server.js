const express = require('express');
const cors = require('cors');
const fs = require('fs');
// 1. IMPORTANTE: Importamos a lógica que já testamos com o Jest
const { processarFatura } = require('./logica'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/analisar-fatura', (req, res) => {
    // 1. Lê o arquivo JSON
    const data = fs.readFileSync('./fatura.json', 'utf8');
    const fatura = JSON.parse(data);

    // 2. CHAMA A MÁGICA: Em vez de fazer a conta aqui, usamos a função testada
    const relatorio = processarFatura(fatura);

    // 3. DEVOLVE O RELATÓRIO: Note que usamos os dados que vêm da 'logica.js'
    res.json({
        total: relatorio.total,
        limite: 2000,
        status: relatorio.status,
        excesso: relatorio.total > 2000 ? relatorio.total - 2000 : 0,
        vilao: relatorio.vilao,
        detalhes: fatura
    });
});

app.listen(port, () => {
    console.log(`🚀 Analisador FinOps rodando em http://localhost:${port}`);
});