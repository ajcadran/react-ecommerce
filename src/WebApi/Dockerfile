FROM node:18

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 5000

CMD [ "node", "src/server.js" ]
