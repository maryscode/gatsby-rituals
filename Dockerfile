FROM node:18.12.1 as builder
WORKDIR /usr/app
COPY ./ /usr/app/

ENV NODE_ENV="production"
ENV GATSBY_ENV="production"
ENV GATSBY_API_ENDPOINT="https://brenso-dtc-api.azurewebsites.net/"

RUN npm install
RUN npm run build

FROM php:8.1-apache
RUN apt-get -y update && apt-get -y install vim
RUN apt-get -y install libapache2-mod-security2


WORKDIR /var/www/html
COPY --from=builder /usr/app/public/ .
COPY --from=builder /usr/app/static/.htaccess /var/www/html/.htaccess
COPY --from=builder /usr/app/apache2.conf /etc/apache2/apache2.conf

RUN a2enmod rewrite
RUN a2enmod headers
EXPOSE 80
