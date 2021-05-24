FROM mhart/alpine-node:12 AS builder
WORKDIR /app

COPY build /app/build
COPY src /app/src
COPY public /app/public
COPY package.json /app	
COPY yarn.lock /app	


RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev
RUN yarn && yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]