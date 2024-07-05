# GUIDE

## APP Run

```bash
npm i
npm run dev
```

## Config

DEV:

```bash
PORT=3000
PG_HOST=localhost
PG_USER=postgres
PG_PASSWORD=password
PG_DATABASE=control_calificaciones
JWT_SECRET=mysecretkey
```

## Database Init

```bash

docker run --name pg-control-calificaciones -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=control_calificaciones -v ./database/init.sql:/docker-entrypoint-initdb.d/init.sql -d postgres

docker run --name pg-control-calificaciones -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=control_calificaciones -d postgres

docker start pg-control-calificaciones
docker stop pg-control-calificaciones
docker rm pg-control-calificaciones
```
