FROM node:18

WORKDIR /usr/src/client

RUN npm install serve

COPY public/ ./public/

EXPOSE 80

CMD [ "npx", "serve", "public", "-p", "80", "-s" ]
