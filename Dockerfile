FROM node:22.11.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3001

ENV NODE_ENV=production

EXPOSE $PORT

CMD [ "npm", "start" ]