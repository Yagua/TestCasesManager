import urllib3
import json

user_url = "http://localhost:8080/api/v1/users/"
test_case_url = "http://localhost:8080/api/v1/test-cases/u/%d"
http = urllib3.PoolManager()

users = [
    {
        "firstName": "Dilan",
        "secondName": "Andres",
        "paternalLastName": "Baron",
        "maternalLastName": "Murcia",
        "userName": "yagua",
        "password": "foobar",
        "testCases": []
    },
    {
        "firstName": "Luisa",
        "secondName": "Fernanda",
        "paternalLastName": "Arevalo",
        "maternalLastName": "Vergara",
        "userName": "lfarevalov",
        "password": "lfarevalov",
        "testCases": []
    }
]

test_cases = {
    "1": [
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
        }
    ]
}

for user in users:
    json_user = json.dumps(user)
    user_response = http.request(
            "POST",
            user_url,
            body = json_user,
            headers={'Content-Type': 'application/json'}
        )
    user_id = json.loads(user_response.data)["userId"]
    tcs = test_cases.get(str(user_id))
    if tcs != None:
        for test_case in tcs:
            json_test_case = json.dumps(test_case)
            test_case_response = http.request(
                    "POST",
                    test_case_url % (user_id),
                    body = json_test_case,
                    headers={'Content-Type': 'application/json'}
                )
        print(test_case_response.data)
    print(user_response.data)
