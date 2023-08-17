<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Tener instalado NodeJS, npm, yarn, docker, docker compose, docker-desktop

2. Tener Nest CLI instalado windows cmd como administrador

```
npm i -g @nestjs/cli
```

3. Tener Nest CLI instalado linux, mac

```
sudo npm i -g @nestjs/cli
```

4. Clonar el repositorio

5. Ejecutar

```
cd nombre-proyeto
yarn install
```

6. Levantar la base de datos

```
docker compose up -d
```

7. Levantar app en la raíz del proyecto

```
npm run start:dev
```

- ó

```
yarn start:dev
```

8. Reconstruir la base de datos ejecutar con get

```
www.localhost:3000/api/v2/seed
```

9. bajar la base de datos

```
docker compose down
```

## Stack usado

- MongoDB
- NestJS
- Docker
- Docker compose
- Docker Desktop
