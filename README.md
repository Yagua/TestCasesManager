# Test Cases Manager

Fullstack Aplicacion para gestion de casos de uso.

## Tecnologias Usadas

- Spring-Boot (Java 11)
- React 17
- Mysql

## Dependencias

- Backend
    - Lombok
    - Spring Data Jpa
    - Spring Web
    - Mysql-connector-java
- Frontend
    - React
    - React-Router
    - Axios
    - Bootstrap

## Como Ejecutar

En primer lugar hay que clonar el presente repositorio

```
git clone https://github.com/Yagua/TestCasesManager
cd TestCasesManager
```

##### Frontend

Una vez el repositorio clonado, para poder ejecutar la aplicacion frontend es
necesario tener `nodejs` y `npm` tanto para resolver las dependencias del la misma
como para levantar el servidor para usarla.

```bash
    cd tcs_manager_frontend
    npm start
```

Las instrucciones anteriormente expuestas levantaran un servidor donde estara
la aplicacion disponible para su uso en `http://localhost:3000`

##### Backend

Con el repositorio clonado, hay que tener instalado `jdk11` en nustras maquinas
para poder correr la aplicacion backend. Teniendo en cuenta esto, hay que realizar
lo siguiente.

```bash
cd tcs_manager_system
./gradlew bootRun
```

Las instrucciones anteriormente ejecutara la aplicacion backend, la cual nos expondra
una RESTful API que nos permitira interactuar con el root de la aplicacion en general.
dicho servicio estara expuesto en `http://localhost:3000`

### TODOS

- Mejorar la seguridad de la API (implementar JWT para autenticacion and Spring-Security)
