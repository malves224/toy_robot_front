# Etapa 1: Build
FROM node:14-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos e diretórios para o contêiner
COPY . .

# Expor a porta 8080
EXPOSE 8080

# Comando para iniciar o servidor de desenvolvimento Vue
CMD ["npm", "run", "serve"]
