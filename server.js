const express = require('express');
const cors = require('cors'); // Necessário para o site conseguir falar com o servidor
const app = express();

app.use(express.json());
app.use(cors());

// A sua lógica de FinOps agora é uma ROTA de API
app.post('/analisar', (req, res) => {
    const { custo } = req.body; // O site envia o custo para cá
    const BUDGET_LIMIT = 2000;
    
    console.log(`Recebido pedido de análise: USD ${custo}`);

    const resultado = {
        valor: custo,
        status: custo > BUDGET_LIMIT ? '⚠️ OVER BUDGET' : '✅ OK',
        excesso: custo > BUDGET_LIMIT ? custo - BUDGET_LIMIT : 0,
        data: new Date().toLocaleString()
    };

    res.json(resultado); // O Backend responde para o site
});

app.listen(3000, () => console.log('🚀 Backend rodando em http://localhost:3000'));