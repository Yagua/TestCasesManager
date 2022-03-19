import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Modal } from 'bootstrap';

import UserService from '../service/UserService';
import TestCaseService from '../service/TestCaseService'
import LoadingComponent from './LoadingComponent';
import ModalMessageComponent from './ModalMessageComponent'

const TestCasesListComponent = (props) => {
    let [user, setUser] = useState({});
    let [isLoaded, setIsLoaded] = useState(false);
    let [modalObject, setModalObject] = useState({})
    let [deleteAnswer, setDeleteAnswer] = useState(false)
    let [testCases, setTestCases] = useState([])
    let userId = localStorage.getItem("loggedUserId");
    let navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")
        UserService.getUserById(userId)
            .then((user) => {
                setUser(user);
                setIsLoaded(true);
                updateTestCases(user)
                setModalObject(new Modal(document.getElementById("modal-window")))
            })
    }, [testCases])

    const updateTestCases = (user) => {
        setTestCases(user.testCases.filter(testCase => {
            return props.disabledTestCases
                ? !testCase.enabled
                : testCase.enabled;
        }));
    }

    const enableOrDisableTestCase = (testCaseId, enable) => {
        let partialChange = { enabled: true }
        if(!enable) partialChange.enabled = false
        TestCaseService.partialUpdateTestCase(testCaseId, partialChange)
            .then(_ => { updateTestCases(user) })
            .catch(error => console.error(error))
    }

    const deleteTestCase = (testCaseId) => {
        console.log(testCaseId)
        modalObject.show()
        // if(deleteAnswer) {
        //     TestCaseService.deleteTestCase(testCaseId)
        //         .then(_ => {
        //             // window.location.reload()
        //         })
        //         .catch(error => console.error(error))
        // }
    }

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
              <div className="content">
                <ModalMessageComponent
                    modalObject = {modalObject}
                    modalTitle = "Eliminar Caso de Uso"
                    modalBody = "Si elimina el caso de uso, toda la información relacionada a el se borrara también."
                    acceptButtonProperties = {{
                        buttonTitle: "Eliminar Definitivamente",
                        callbackAction: () => console.log("holamunn")
                    }}
                />
                <div className="m-4">
                  <h2 className = "text-center display-5 my-3"> {props.title ? props.title : "Lista de Casos de Prueba"} </h2>
                  { !props.disabledTestCases &&
                      <Link to = "/add-testcase" className = "btn btn-primary mb-3" > Agregar Caso de Prueba </Link>
                  }
                  <div className="table-responsive custom-table-responsive">
                    <table className="table custom-table">

                      <thead>
                        <tr>
                          <th scope="col"> Caso De Uso Id </th>
                          <th scope="col"> Nombre </th>
                          <th scope="col"> Modulo del Systema </th>
                          <th scope="col"> Version </th>
                          <th scope="col"> Fecha de Ejecicion</th>
                          <th scope="col"> Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            testCases.map(testCase => {
                                return (
                                    <>
                                        <tr key="fs-01" className="spacer"><td colSpan="100"></td></tr>
                                        <tr key={testCase.testCaseId} scope="row">
                                            <td className="text-center">{testCase.testCaseId}</td>
                                            <td>{testCase.testCaseName}</td>
                                            <td>{testCase.systemModule}</td>
                                            <td>{testCase.testCaseVersion}</td>
                                            <td >{testCase.executionDate}</td>
                                            { props.disabledTestCases ?
                                                <td>
                                                    <button
                                                        className = "btn btn-success"
                                                        onClick = {() =>{
                                                            enableOrDisableTestCase(testCase.testCaseId, true)
                                                        }}
                                                        style = {{marginLeft:"10px"}}
                                                    >Habilitar</button>
                                                    <button
                                                        className = "btn btn-danger"
                                                        onClick = {() =>{
                                                            deleteTestCase(testCase.testCaseId)
                                                        }}
                                                        style = {{marginLeft:"10px"}}
                                                    >Eliminar</button>
                                                </td>
                                                 :
                                                <td>
                                                    <Link className="btn btn-primary"
                                                          to={`/view-test-case/${testCase.testCaseId}`}
                                                    > Visualizar</Link>
                                                    <button
                                                        className = "btn btn-danger"
                                                        onClick = {() => {
                                                            enableOrDisableTestCase(testCase.testCaseId, false)
                                                        }}
                                                    style = {{marginLeft:"10px"}}>Suprimir</button>
                                                </td>
                                            }
                                        </tr>
                                        <tr key="fs-02" className="spacer"><td colSpan="100"></td></tr>
                                    </>
                                );
                            })
                        }
                      </tbody>
                    </table>
                  </div>
                    { testCases.length < 1 &&
                        <div className="text-center m-3 text-muted fst-italic">
                            No hay Casos de Uso para Mostrar
                        </div>
                    }
                </div>
              </div>
        );
    }

    return renderContent()
}

export default TestCasesListComponent
