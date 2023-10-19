FROM node:18.18.2-alpine3.18

RUN apk add -U git subversion

RUN sudo npm install -g yarn
