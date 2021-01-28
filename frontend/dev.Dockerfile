FROM node:alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g

RUN npm install

ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js vue.config.js ./

CMD [ "npm", "run", "serve" ]
