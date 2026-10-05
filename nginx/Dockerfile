FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

RUN mkdir -p /var/www/html \
    && touch /var/www/html/index.php

ENV DOCKERIZE_VERSION=v0.15.1

RUN apk add --no-cache wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    | tar xzf - -C /usr/local/bin \
    && apk del wget

CMD ["nginx", "-g", "daemon off;"]