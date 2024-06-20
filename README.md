# Laravel Base Core

## Installation
1.- php Version >7.2

2.- Node Version > 14 (No obligatorio) 
[install node](https://nodejs.org/es/)

3.- Mysql Version > 5.7

4.- Laravel 8.5 
[install composer](https://getcomposer.org/)

## install packages
```bash
composer install
```

## configure your environment variables
### This is really important as this is where you configure everything you need to start the application.
```
cp .env.example .env
```

## database
check the conection credentials and name of database in the file .env 
create a database with the same name especifiqued on the .env
```bash
php artisan migrate:fresh --seed
```
To connect SQLServer database it's neccesary to have the follow pdo in your php.ini
extesion=php_pdo_sqlsrv
## Install the dependencies
```bash
php artisan key:generate
php artisan jwt:secret
php artisan cache:clear
php artisan config:clear
```

## Start app
```bash
php artisan serve
```

## Test
```bash
user: admin@demo.com
pass: demo
```

## development
Generate docummentacion for api (swagger check your env to generate this in automatic)
```bash
php artisan l5-swagger:generate
```
Configure the symbolic link to upload the files
```bash
php artisan storage:link
```

## Notas
When downloading updates it is necessary to execute the commands to generate the migrations
and most importantly the cache and the configuration of laravel-
execute the follow command to regenerate links to models and other configuration files
```bash
composer dumpautoload
```



## permisos
sudo chgrp -R www-data storage bootstrap/cache
sudo chmod -R ug+rwx storage bootstrap/cache
