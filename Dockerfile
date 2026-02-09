# 1. Base: Usamos uma versão leve do Node.js (Alpine) para economizar espaço
FROM node:20-alpine

# 2. Pasta de trabalho: Onde o código vai morar dentro do container
WORKDIR /app

# 3. Dependências: Copiamos o package.json e instalamos tudo
COPY package*.json ./
RUN npm install --production

# 4. Código: Copiamos o resto dos arquivos (server.js, logica.js, fatura.json)
COPY . .

# 5. Porta: O seu server.js usa a 3000
EXPOSE 3000

# 6. Comando: Como ligar o motor
CMD ["node", "server.js"]