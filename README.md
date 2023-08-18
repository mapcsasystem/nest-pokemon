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

7. crear un archivo en la raíz **.env** en base a **.env.example**

8. Levantar app en la raíz del proyecto

```
npm run start:dev
```

- ó

```
yarn start:dev
```

9. Reconstruir la base de datos ejecutar con get

```
www.localhost:3000/api/v2/seed
```

10. bajar la base de datos

```
docker compose down
```

## Stack usado

- MongoDB
- NestJS
- Docker
- Docker compose
- Docker Desktop

# Dockenizar proyecto

#### Production Build

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen **Build**

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

4. Despues de hacer el **build** si se baja la imagen se puede ejecutar

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```

5. si se borra la imagen iniciar en el paso 3
