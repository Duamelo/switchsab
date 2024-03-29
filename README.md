# Application de gestion de salle de jeux

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)

Il s'agit d'un logiciel de gestion de salles de jeux.

## Pour commencer

    - git clone https://github.com/Duamelo/switchsab.git

### Pré-requis

    - node js
    - nest js
    - postgresql
    - firefox (or chrome)

### Installation de node js
  - [ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-fr)
  - [windows](https://nodejs.org/en/download/)

### Installation de nest js
  - [ubuntu 20.04](https://docs.nestjs.com/cli/overview)
  - [windows](https://docs.nestjs.com/cli/overview)


### Installation de postgresql

  - [ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)
  - [windows 10](https://www.veremes.com/installation-postgresql-windows)


### Installation des dépendances du projet switchsab

    - cd server && npm install
    - cd client && npm install

## Edition du fichier .env dans le répertoire server
    - POSTGRES_HOST = localhost
    - POSTGRES_PORT = 5432
    - POSTGRES_USER = your_username
    - POSTGRES_PASSWORD = your_password
    - POSTGRES_DB = switchsab
    - JWT_SECRET = yatuezytyeztyezrtzyitazeyuazyziu
    - JWT_EXPIRATION_TIME = 36000
    - PORT=5000

## Création de la base de donnée

    - créer un utilisateur de nom {{username}}
    - remplacer franck par {{username}} dans le script swi.sql
    - restauration de la base données: psql database_name < swi.sql
    - export de la base de données existante (à titre informatif): pg_dump -U username -p 5432 database_name > swi.sql

## Démarrer l'application

    - cd client 
    - run this command: npm start
    - cd server
    - run this command: npm start


## Utilisateurs (pour la démo)

### Promoteur
    - pseudo: Duamelo
    - password: 123456789

### Gérant
    - pseudo: roland
    - password: 123456789

### client
    - pseudo: dani
    - password: 123456789

## Versions
    - Node js v14.17.6
    - npm v8.19.2

## Auteurs

* **David DOSSEH** _alias_[@Duamelo](https://github.com/Duamelo)

## Licence
