# 📊 FinOps Cost Analyzer (Analisador_VS)

[![Node.js CI](https://github.com/fefeluis91-crypto/finops-cost-analyzer-js/actions/workflows/ci.yml/badge.svg)](https://github.com/fefeluis91-crypto/finops-cost-analyzer-js/actions)

Este projeto é um analisador de custos de infraestrutura em nuvem baseado em princípios de **FinOps**. Ele automatiza a leitura de faturas e identifica desvios de orçamento e serviços com gastos excessivos.

## 🚀 O que este projeto faz?

- **Processamento de Faturas**: Lê dados reais de faturas em formato JSON.
- **Análise de Orçamento (Budget)**: Verifica se o gasto total ultrapassou o limite de $2.000.
- **Identificação do "Vilão"**: Deteta automaticamente o serviço que mais pesou no bolso.
- **API Pronta**: Disponibiliza os dados via endpoint HTTP para integração com dashboards.

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js & Express.js
- **Testes**: Jest (cobertura total da lógica de cálculo)
- **Qualidade**: ESLint (padrão de código profissional)
- **Containerização**: Docker (Imagem leve baseada em Alpine)
- **CI/CD**: GitHub Actions (Testes e Lint automáticos a cada Push)

---

## 📦 Como Executar

### 1. Via Docker (Recomendado - Automático)
O Docker configura todo o ambiente (Node, dependências e servidor) automaticamente para ti.
```bash
# Construir a imagem
docker build -t analisador-finops .

# Executar o container
docker run -d -p 3000:3000 --name meu-finops analisador-finops