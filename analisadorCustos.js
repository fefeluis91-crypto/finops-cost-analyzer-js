const axios = require('axios');

// Configurações de orçamento (Budget)
const BUDGET_LIMIT = 2000;

/**
 * Simula a busca de dados de uma API de Billing de Nuvem
 */
async function fetchCloudCosts() {
    try {
        console.log("Mock: Conectando à API de Billing...");
        
        // Aqui simulamos uma chamada real. 
        // Em um cenário real, usaríamos a URL da AWS ou GCP.
        return [
            { servico: 'AWS EC2', custo: 2500, regiao: 'us-east-1' },
            { servico: 'AWS S3', custo: 450, regiao: 'sa-east-1' },
            { servico: 'Azure Functions', custo: 120, regiao: 'east-us' },
            { servico: 'Google BigQuery', custo: 3200, regiao: 'us-central1' }
        ];
    } catch (error) {
        throw new Error("Falha ao integrar com a API de custos: " + error.message);
    }
}

/**
 * Lógica Principal de Análise (FinOps)
 */
async function runFinOpsAnalysis() {
    console.log("=== INICIANDO ANÁLISE DE CUSTOS CLOUD ===\n");

    try {
        const costs = await fetchCloudCosts();

        const report = costs.map(item => ({
            Servico: item.servico,
            Regiao: item.regiao,
            Custo: `USD ${item.custo.toFixed(2)}`,
            Status: item.custo > BUDGET_LIMIT ? '⚠️ OVER BUDGET' : '✅ OK',
            Excesso: item.custo > BUDGET_LIMIT ? `USD ${(item.custo - BUDGET_LIMIT).toFixed(2)}` : '-'
        }));

        console.table(report);
        
        console.log(`\nRelatório gerado em: ${new Date().toLocaleString()}`);
        console.log(`Budget de referência: USD ${BUDGET_LIMIT}`);

    } catch (err) {
        console.error("ERRO NO PROCESSAMENTO:", err.message);
    }
}

// Execução
runFinOpsAnalysis();