# Test Cases Manager

Fullstack Application for Test Cases Management.

## Technologies Used

- Spring-Boot (Java 11)
- React 17
- Mysql

## Dependencies

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

## How to run

First of all you have to clone the present repository

```
git clone https://github.com/Yagua/TestCasesManager
cd TestCasesManager
```

##### Frontend

Once the repository is cloned, to be able to execute the frontend application
it is necessary to have `nodejs` and `npm` both to resolve the dependencies of
the same one and to raise the server to use it.

```bash
    cd tcs_manager_frontend
    npm start
```

The above instructions will raise a server where the application will be
available for use at `http://localhost:3000`.

##### Backend

With the cloned repository, you must have `jdk11` installed on our machines to
be able to run the backend application. With this in mind, you have to do the
following.

```bash
cd tcs_manager_system
./gradlew bootRun
```

The above instructions will execute the backend application, which will expose
a RESTful API that will allow us to interact with the root of the application
in general. This service will be exposed at `http://localhost:8080`.

### TODOS

- Improve API security (implement JWT for authentication and Spring-Security)
- Improve authentication mechanism (the current one is simple and created for
  testing purposes).
