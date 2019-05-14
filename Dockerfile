FROM node:10.15.3

WORKDIR /u/app

COPY package.json .
COPY package-lock.json .


RUN npm ci

COPY . .
