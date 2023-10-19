FROM node:18.18.2-alpine3.18

RUN apk add -U git subversion

RUN apk add yarn
