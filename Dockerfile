FROM node:12.19.0 AS base
WORKDIR /abbr

COPY package*.json ./

FROM base AS dependancies

RUN npm ci --production

FROM dependancies AS code

COPY . .

FROM code AS abbr

EXPOSE 3000

USER node

CMD [ "npm start" ]
