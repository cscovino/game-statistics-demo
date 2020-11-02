FROM node:12.18.1-alpine

WORKDIR /app/

COPY package.json .

ENV NODE_ENV=production

RUN npm install --production

COPY . .

EXPOSE 3000

RUN npm run build