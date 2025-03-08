# Use uma imagem base com Node.js e Cypress
FROM cypress/included:12.17.4

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Comando para executar os testes
CMD ["npm", "run", "cy:run"] # comando adaptado para seu projeto