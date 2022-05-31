# Script desingned to populate CUDB database
import urllib3
import json

user_url = "http://localhost:8080/api/v1/users/"
http = urllib3.PoolManager()

users = [
    {
        "firstName": "Dilan",
        "secondName": "Andres",
        "paternalLastName": "Baron",
        "maternalLastName": "Murcia",
        "userName": "yagua",
        "password": "foobar",
        "testCases": [
            {
                "testCaseName": "Prueba de Registro",
                "testCaseVersion": "v1.0",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "Test de formularios",
                "preconditions": "Frontend",
                "testSteps": "1. Acceso al frontend\n2. Contar con acceso al 'Login Component'",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "Funciona con ciertas irregularidades de rendimiento",
                "observations": "Se observa normalidad en el funcionamiento",
                "testers": [
                    {
                      "firstName": "Haiver",
                      "secondName": "Antonio",
                      "paternalLastName": "Roca",
                      "maternalLastName": "Torres",
                      "sing": "HT",
                    }
                ],
                "testElements": [
                    {
                      "field": "Campo de Nombre",
                      "value": "Bryan",
                      "scenario": "n/a",
                      "expectedResponse": "Valor valido",
                      "matching": True,
                      "systemResponse": "Valor valido",
                    },
                    {
                      "field": "Campo de Contrasena",
                      "value": "foobar",
                      "scenario": "n/a",
                      "expectedResponse": "Valor valido",
                      "matching": True,
                      "systemResponse": "Valor valido",
                    }
                ],
                "enabled": True
            },
            {
                "testCaseName": "Prueba de Formulario",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "Test de formularios",
                "preconditions": "Frontend",
                "testSteps": "1. Acceso al frontend\n2. Testear Forms",
                "postconditions": "n/a",
                "defectsAndDesviations": "Sin defectos y desviaciones",
                "veredict": "n/a",
                "observations": "Se observa normalidad en el funcionamiento",
                "testers": [
                    {
                      "firstName": "David",
                      "secondName": "Alberto",
                      "paternalLastName": "Daza",
                      "maternalLastName": "Amado",
                      "sing": "DavDaza",
                    }
                ],
                "testElements": [
                    {
                      "field": "Campo de Nombre",
                      "value": "Dilan",
                      "scenario": "n/a",
                      "expectedResponse": "Valor valido",
                      "matching": True,
                      "systemResponse": "Valor valido",
                    },
                    {
                      "field": "Campo de Contrasena",
                      "value": "foobar",
                      "scenario": "n/a",
                      "expectedResponse": "Valor valido",
                      "matching": True,
                      "systemResponse": "Valor valido",
                    }
                ],
                "enabled": True
            },
            {
                "testCaseName": "Prueba Cambio Colores",
                "testCaseVersion": "v1.0",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "Test de cambio de colores en frontend",
                "preconditions": "Frontend app",
                "testSteps": "1. Acceso al frontend\n2. Testear cambio de colores",
                "postconditions": "1. Contar con la opcion de cambio de colores",
                "defectsAndDesviations": "Sin defectos y desviaciones",
                "veredict": "n/a",
                "observations": "Se observa normalidad en el funcionamiento de cambio de colores",
                "testers": [
                    {
                      "firstName": "Felipe",
                      "secondName": "Duvan",
                      "paternalLastName": "Bravo",
                      "maternalLastName": "Mora",
                      "sing": "DuvF",
                    }
                ],
                "testElements": [
                    {
                      "field": "Boton de 'Dark Mode'",
                      "value": "Standart Click",
                      "scenario": "n/a",
                      "expectedResponse": "Cambio a modo Dark",
                      "matching": True,
                      "systemResponse": "Color cambiado a Dark",
                    },
                ],
                "enabled": True
            },
            {
                "testCaseName": "Prueba actualizacion datos usuario",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "Test de formularios",
                "preconditions": "Frontend",
                "testSteps": "1. Acceso al frontend\n2. Testear Forms",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "Se observa normalidad en el funcionamiento",
                "testers": [
                    {
                      "firstName": "Bryan",
                      "secondName": "Sneyder",
                      "paternalLastName": "Baron",
                      "maternalLastName": "Murcia",
                      "sing": "Bbaron",
                    }
                ],
                "testElements": [
                    {
                      "field": "Campo de Nombre",
                      "value": "Dilan",
                      "scenario": "n/a",
                      "expectedResponse": "Valor valido",
                      "matching": True,
                      "systemResponse": "Valor valido",
                    },
                    {
                      "field": "Campo de Contrasena",
                      "value": "foobar",
                      "scenario": "n/a",
                      "expectedResponse": "Valor valido",
                      "matching": True,
                      "systemResponse": "Valor valido",
                    }
                ],
                "enabled": True
            },
            {
                "testCaseName": "Prueba de Responsive Desing",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "Test de UI",
                "preconditions": "Frontend",
                "testSteps": "1. Acceso al frontend\n2. Tener pantallas de diferentes resoluciones",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "Se observa ciertas irregularidades al entrar en queries de 1230x800px",
                "testers": [
                    {
                      "firstName": "Dilan",
                      "secondName": "Andres",
                      "paternalLastName": "Baron",
                      "maternalLastName": "Murcia",
                      "sing": "Dabaronm",
                    }
                ],
                "testElements": [
                    {
                      "field": "Pantalla de 1230x800px",
                      "value": "n/a",
                      "scenario": "Responsive change",
                      "expectedResponse": "Ajuste de interfaz en resolucion 1230x800px",
                      "matching": True,
                      "systemResponse": "Cambio irregular en 1230x800px",
                    },
                ],
                "enabled": True
            },
            {
                "testCaseName": "Prueba de API endpoint 'users'",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Backend",
                "testCaseDescription": "Test de obtencion de datos del enpoint 'users' del sistema",
                "preconditions": "Backend app",
                "testSteps": "1. Backend App\n2.Rest Client like postman\n3. Hacer peticion de tipo GET al endpoint",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "Se obtienen de manera satisfactoria todos los datos en dicho enpoint",
                "testers": [
                    {
                      "firstName": "Dilan",
                      "secondName": "Andres",
                      "paternalLastName": "Baron",
                      "maternalLastName": "Murcia",
                      "sing": "Dabaronm",
                    }
                ],
                "testElements": [],
                "enabled": True
            },
            {
                "testCaseName": "Prueba Carga de Componentes",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "Test de cambio entre componentes del frontend",
                "preconditions": "Frontend",
                "testSteps": "1.Frontend app",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "Los componentes parcen comportarse con normalidad",
                "testers": [
                    {
                      "firstName": "Bryan",
                      "secondName": "Sneyder",
                      "paternalLastName": "Baron",
                      "maternalLastName": "Murcia",
                      "sing": "Bbaron",
                    }
                ],
                "testElements": [],
                "enabled": True
            },
            {
                "testCaseName": "Prueba de Validacion de campos",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "Test de validacion de campos en formularios",
                "preconditions": "Frontend",
                "testSteps": "1.Frontend app\n2. Forms de la app",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "Los campos hacen su trabajo como se esparaba",
                "testers": [
                    {
                      "firstName": "Anibal",
                      "secondName": "Antonio",
                      "paternalLastName": "Rico",
                      "maternalLastName": "Monte",
                      "sing": "AnRiM",
                    },
                    {
                      "firstName": "Bryan",
                      "secondName": "Sneyder",
                      "paternalLastName": "Baron",
                      "maternalLastName": "Murcia",
                      "sing": "Bbaron",
                    }
                ],
                "testElements": [
                    {
                      "field": "Campo de Correo Electronico",
                      "value": "test.correo@gmail.com",
                      "scenario": "Regex validation",
                      "expectedResponse": "Las Expresiones regulares detras de los formularios trabajan como deben",
                      "matching": True,
                      "systemResponse": "Expresiones regulares correctamente implementadas",
                    },
                ],
                "enabled": True
            },
            {
                "testCaseName": "Prueba de Test-case inhabilitado",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "n/a",
                "preconditions": "Frontend",
                "testSteps": "n/a",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "n/a",
                "testers": [],
                "testElements": [],
                "enabled": False
            },
            {
                "testCaseName": "Prueba de autenticacion de usuarios",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "n/a",
                "preconditions": "Frontend",
                "testSteps": "n/a",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "n/a",
                "testers": [],
                "testElements": [],
                "enabled": False
            },
        ]
    },
    {
        "firstName": "Luisa",
        "secondName": "Fernanda",
        "paternalLastName": "Arevalo",
        "maternalLastName": "Vergara",
        "userName": "lfarevalov",
        "password": "lfarevalov",
        "testCases": [
            {
                "testCaseName": "Prueba actualizacion datos usuario",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "Test de formularios",
                "preconditions": "Frontend",
                "testSteps": "1. Acceso al frontend\n2. Testear Forms",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "Se observa normalidad en el funcionamiento",
                "testers": [
                    {
                      "firstName": "Bryan",
                      "secondName": "Sneyder",
                      "paternalLastName": "Baron",
                      "maternalLastName": "Murcia",
                      "sing": "Bbaron",
                    }
                ],
                "testElements": [
                    {
                      "field": "Campo de Nombre",
                      "value": "Dilan",
                      "scenario": "n/a",
                      "expectedResponse": "Valor valido",
                      "matching": True,
                      "systemResponse": "Valor valido",
                    },
                    {
                      "field": "Campo de Contrasena",
                      "value": "foobar",
                      "scenario": "n/a",
                      "expectedResponse": "Valor valido",
                      "matching": True,
                      "systemResponse": "Valor valido",
                    }
                ],
                "enabled": True
            },
            {
                "testCaseName": "Prueba de Test-case inhabilitado",
                "testCaseVersion": "v1",
                "executionDate": "2022-05-11",
                "systemModule": "Frontend",
                "testCaseDescription": "n/a",
                "preconditions": "Frontend",
                "testSteps": "n/a",
                "postconditions": "n/a",
                "defectsAndDesviations": "n/a",
                "veredict": "n/a",
                "observations": "n/a",
                "testers": [],
                "testElements": [],
                "enabled": False
            },
        ]
    }
]

for user in users:
    json_user = json.dumps(user)
    user_response = http.request(
            "POST",
            user_url,
            body = json_user,
            headers={'Content-Type': 'application/json'}
        )
    print(user_response.data)
