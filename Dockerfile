FROM node:alpine

COPY ./package.json ./package.json

RUN npm install 

COPY ./ ./ 

