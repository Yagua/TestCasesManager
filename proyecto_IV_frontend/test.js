const API_BASE_URL = "http://127.0.0.1:8080/api/v1"

let container = document.getElementById("container")
let user_index = 0


fetch(API_BASE_URL + "/user/")
    .then((res) => res.json())
    .then((users) => {
        let selected_user = users[user_index]
        container.innerHTML = `
            <h1>Datos de usuario ${selected_user.userName}</h1>
            <p>ID: ${selected_user.userId}</p>
            <p>Primer Nombre: ${selected_user.firstName}</p>
            <p>Segundo Nombre: ${selected_user.secondName}</p>
            <p>Apellido Paterno: ${selected_user.paternalLastName}</p>
            <p>Apellido Materno: ${selected_user.maternalLastName}</p>
            <p>Fecha Creacion: ${selected_user.timeStamp}</p>
            <br/>
            <h3>Casos de prueba</h3>
        `

        for (let i = 0; i < selected_user.testCases.length; i++) {
            if (!selected_user.testCases[i].enabled) continue
            let testCase = selected_user.testCases[i]
            container.insertAdjacentHTML("afterend", `
                <p>Caso de prueba ID: ${testCase.testCaseId}</p>
                <p>Nombre: ${testCase.testCaseName}</p>
                <p>Version: ${testCase.testCaseVersion}</p>
                <p>Fecha de Ejecucion: ${testCase.executionDate}</p>
                <p>Modulo del sistema: ${testCase.systemModule}</p>
                <p>Description: ${testCase.testCaseDescription}</p>
                <p>Pasos: ${testCase.testSteps}</p>
                <p>Precondiciones: ${testCase.preconditions}</p>
                <p>Poscondiciones: ${testCase.postconditions}</p>
                <p>Defectos y Desviaciones: ${testCase.defectsAndDesviations}</p>
                <p>Veredicto: ${testCase.veredict}</p>
                <p>Observaciones: ${testCase.observations}</p>
                </br>
            `)
        }
        console.log(selected_user)
    })

//  {
//     "testerId": 3,
//     "firstName": "Dilan",
//     "secondName": "Baron",
//     "paternalLastName": "Murica",
//     "maternalLastName": "Baron",
//     "sing": "cualquiermierdaaquixD, tambier",
//     "timeStamp": "2022-03-10"
// }
