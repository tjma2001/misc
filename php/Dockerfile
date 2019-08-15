# Run image
FROM php:7.3-apache-stretch 

RUN docker-php-ext-install pdo_mysql mysqli
RUN a2enmod rewrite
RUN apt-get update \
      && apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libpng-dev \
      && docker-php-ext-install -j$(nproc) iconv \
      && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
      && docker-php-ext-install -j$(nproc) gd \
      && rm -rf /var/lib/apt/lists/*

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
      php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" && \
      php composer-setup.php --install-dir=/usr/bin && \ 
      php -r "unlink('composer-setup.php');" && \
      echo "Installed"

RUN apt-get update \
      && apt-get install -y git zip unzip \
      && rm -rf /var/lib/apt/lists/*