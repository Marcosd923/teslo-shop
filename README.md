## Descripcíon

## Correr en dev

1. Clonar repositorio
2. Crear una copia del archivo `.env.template` y renombrarlo a `.env` y cambiar las variables de entorno.
3. Instalar dependecias `npm install`
4. Levantar la base de datos `docker compose up -d`
5. Correr las migraciones de Prisma `npx prisma migrate dev`
6. Correr el proyecto `npm run dev`

## Correr en prod
