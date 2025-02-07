FROM node:21 as deps

WORKDIR /app
COPY package*.json ./

#В случае ошибки SELF_SIGNED_CERT_IN_CHAIN во время запуска "npm install"
#RUN npm set strict-ssl false
#RUN npm config set registry="http://registry.npmjs.org/"

RUN npm install -f
COPY . .

ENV PORT 443

CMD ["/bin/bash", "entrypoint.sh"]
