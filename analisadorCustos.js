const gastosNuvem = [
    { servico: 'AWS EC2', valor: 150.50, regiao: 'us-east-1' },
    { servico: 'Google Cloud Storage', valor: 45.00, regiao: 'southamerica-east1' },
    { servico: 'Azure SQL Database', valor: 210.00, regiao: 'eastus' },
    { servico: 'Vercel Hosting', valor: 15.00, regiao: 'global' }
];

const LIMITE_ALERTA = 100.00;

console.log("--- 📊 RELATÓRIO DE CUSTOS DE INFRA (Vibe Coding) ---");

// Filtrando os gastos altos
const gastosAltos = gastosNuvem.filter(item => item.valor > LIMITE_ALERTA);

if (gastosAltos.length > 0) {
    console.warn(`⚠️ ALERTA: Identificamos ${gastosAltos.length} serviços acima de R$ ${LIMITE_ALERTA.toFixed(2)}:`);
    console.table(gastosAltos); // Isso aqui gera uma tabela 
} else {
    console.log("✅ Tudo sob controle. Custos dentro do esperado.");
}