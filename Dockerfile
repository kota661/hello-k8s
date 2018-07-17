FROM node:10
MAINTAINER Kota Sato "satokota@jp.ibm.com"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]
EXPOSE 30000
