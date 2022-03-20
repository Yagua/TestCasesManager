import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Modal } from 'bootstrap';

import UserService from '../service/UserService';
import TestCaseService from '../service/TestCaseService'
import LoadingComponent from './LoadingComponent';
import ModalComponent from './ModalComponent'

const TestCasesListComponent = (props) => {
    let [user, setUser] = useState({});
    let [isLoaded, setIsLoaded] = useState(false);
    let [testCases, setTestCases] = useState([])
    let [modalShow, setModalShow] = useState(false)
    let [testCaseId, setTestCaseId] = useState()
    let userId = localStorage.getItem("loggedUserId");
    let navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")
        UserService.getUserById(userId)
            .then((user) => {
                setUser(user);
                setIsLoaded(true);
                updateTestCases(user)
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
        TestCaseService.deleteTestCase(testCaseId)
            .then(_ => { updateTestCases()})
            .catch(error => console.error(error))
    }

    const handleModalClose = () => setModalShow(false)
    const handleModalOpen = (testCaseId) => {
        setTestCaseId(testCaseId)
        setModalShow(true)
    }

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
              <div className="content">
                <div className="m-4">
                  <h2 className = "text-center display-5 my-3"> {props.title ? props.title : "Lista de Casos de Prueba"} </h2>
                  { !props.disabledTestCases &&
                      <>
                          <div className="alert alert-success mt-2 d-flex justify-content-between" role="alert">
                              <Link to = "/add-testcase" className = "btn btn-primary" > Agregar Caso de Prueba </Link>
                              <Link
                                  type="button"
                                  className="btn btn-primary position-relative"
                                  to = "/disabled-testcases"
                                ><i className="bi bi-trash h4"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                  {user.testCases.filter((element) => !element.enabled).length}
                                </span>
                              </Link>
                          </div>
                      </>
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
                                                            handleModalOpen(testCase.testCaseId)
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
                  <ModalComponent
                      modalTitle  = {<h4>Eliminar Caso de Prueba</h4>}
                      modalBody = "Si elimina el caso de uso, toda la información relacionada a el se borrara también."
                      show = {modalShow}
                      closeAction = {() => handleModalClose}
                      onConfirm = {() => {
                          deleteTestCase(testCaseId)
                          handleModalClose()
                      }}
                      onHide = {() => handleModalClose()} //allow hide the modal with clicks without it
                  />
                </div>
              </div>
        );
    }

    return renderContent()
}

export default TestCasesListComponent
