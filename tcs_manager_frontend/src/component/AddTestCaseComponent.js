import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import HeaderComponent from '../component/HeaderComponent'
import TestCaseService from '../service/TestCaseService'
import ModalComponent from './ModalComponent'

const AddTestCaseComponent = () => {
    let [testCaseName, setTestCaseName] = useState('');
    let [testCaseVersion, setTestCaseVersion] = useState('');
    let [executionDate, setExecutionDate] = useState('');
    let [systemModule, setSystemModule] = useState('');
    let [testCaseDescription, setTestCaseDescription] = useState('');
    let [preconditions, setPreconditions] = useState('');
    let [testSteps, setTestSteps] = useState('');
    let [postconditions, setPostconditions] = useState('');
    let [defectsAndDesviations, setDefectsAndDesviations] = useState('');
    let [veredict, setVeredict] = useState('');
    let [observations, setObservations] = useState('');
    let [testElements, setTestElements] = useState([]);
    let [testers, setTesters] = useState([]);
    let [modalShow, setModalShow] = useState(false)

    let userId = localStorage.getItem("loggedUserId")
    let navigate = useNavigate()

    let testCaseTemplate = {
        testCaseName: testCaseName,
        testCaseVersion: testCaseVersion,
        executionDate: executionDate,
        systemModule: systemModule,
        testCaseDescription: testCaseDescription,
        preconditions: preconditions,
        testSteps: testSteps,
        postconditions: postconditions,
        defectsAndDesviations: defectsAndDesviations,
        veredict: veredict,
        observations: observations,
        testElements: testElements,
        testers: testers
    }

    useEffect(() => {
        //retrive testCase data for visualization
    }, [])

    const createTestCase = () => {
        TestCaseService.createTestCase(userId, testCaseTemplate)
            .then(_ => {
                navigate("/home")
            })
            .catch(error => console.error(error))
    }

    const handleModalClose = () => setModalShow(false)
    const handleModalOpen = () => setModalShow(true)

    return (
        <div>
            <HeaderComponent
                onHome = {false}
                navBarBrand = "Creación de Casos de Prueba"
            />
            <h2 className = "text-center text-muted m-3">Agregar Nuevo Caso de Prueba</h2>
            <div className = "card m-4">
                <div className = "card-body border">
                    <p className = "text-center h5 mt-2 alert alert-secondary">Información Global</p>
                    <div className = "mx-5">
                        <form className = "was-validate">
                            <div className = "row">
                                <div className = "col">
                                    <p className = "form-label text-center">Nombre Caso de Prueba</p>
                                    <input
                                        type = "text"
                                        maxLength = {40}
                                        placeholder = "Ingresa Nombre de Caso de Prueba"
                                        name = "test-case-name"
                                        className = {`form-control`}
                                        onChange = {(e) => {setTestCaseName(e.target.value)}}
                                    />
                                </div>
                                <div className = "col">
                                    <p className = "form-label text-center">Versión Caso de Prueba</p>
                                    <input
                                        type = "text"
                                        maxLength = {20}
                                        placeholder = "Ingresa Módulo del Sistema"
                                        name = "test-case-version"
                                        className = {`form-control`}
                                        onChange = {(e) => {setTestCaseVersion(e.target.value)}}
                                    />
                                </div>
                                <div className = "col">
                                    <p className = "form-label text-center">Fecha Ejecución</p>
                                    <input
                                        type = "date"
                                        placeholder = "Ingresa Fecha Ejecución"
                                        name = "test-case-execution-date"
                                        className = {`form-control`}
                                        onChange = {(e) => {setExecutionDate(e.target.value)}}
                                    />
                                </div>
                            </div>
                            <div className = "row mt-3">
                                <div className = "col">
                                    <p className = "form-label text-center">Módulo del Sistema</p>
                                    <input
                                        type = "text"
                                        maxLength = {80}
                                        placeholder = "Ingresa Nombre de Caso de Prueba"
                                        name = "test-system-module"
                                        className = {`form-control`}
                                        onChange = {(e) => {setSystemModule(e.target.value)}}
                                    />
                                </div>
                                <div className = "col">
                                    <p className = "form-label text-center">Descripción del Caso de Prueba</p>
                                    <textarea
                                        type = "text"
                                        rows = {1}
                                        maxLength = {150}
                                        placeholder = "Ingresa Nombre de Caso de Prueba"
                                        name = "test-case-name"
                                        className = {`form-control`}
                                        onChange = {(e) => {setTestCaseDescription(e.target.value)}}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <p className = "text-center h5 mt-4 alert alert-secondary"> Caso de Prueba</p>
                    <div className = "mx-5">
                        <form>
                            <div className = "row">
                                <div className = "col">
                                    <p className = "form-label text-center">Precondiciones</p>
                                    <textarea
                                        type = "text"
                                        rows = {2}
                                        maxLength = {150}
                                        placeholder = "Ingresa Precondiciones"
                                        name = "test-case-preconditions"
                                        className = {`form-control`}
                                        onChange = {(e) => {setPreconditions(e.target.value)}}
                                    />
                                </div>
                                <div className = "col">
                                    <p className = "form-label text-center">Pasos de la Prueba</p>
                                    <textarea
                                        type = "text"
                                        rows = {2}
                                        maxLength = {150}
                                        placeholder = "Ingresa Pasos de la Prueba"
                                        name = "test-case-steps"
                                        className = {`form-control`}
                                        onChange = {(e) => {setTestSteps(e.target.value)}}
                                    />
                                </div>
                                <div className = "col">
                                    <p className = "form-label text-center">Postcondiciones</p>
                                    <textarea
                                        type = "text"
                                        rows = {2}
                                        maxLength = {150}
                                        placeholder = "Ingresa Postcondiciones"
                                        name = "test-case-postconditions"
                                        className = {`form-control`}
                                        onChange = {(e) => {setPostconditions(e.target.value)}}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <p className = "text-center h5 mt-4 alert alert-secondary"> Elementos de Prueba</p>
                    <div className = "mx-5">
                        <table class="table table-bordered border-secondary">
                            <thead>
                                <tr>
                                    <th className = "text-center">
                                        <span> Datos de Entrada </span>
                                        <hr className = "m-1"/>
                                        <div className = "row">
                                            <th className = "col text-center border-right">Campo</th>
                                            <th className = "col text-center">Valor</th>
                                            <th className = "col text-center">Escenario</th>
                                        </div>
                                    </th>
                                    <th className = "text-center">Respuesta Esperada</th>
                                    <th className = "text-center">Coincide</th>
                                    <th className = "text-center">Respuesta del Sistema</th>
                                </tr>
                            </thead>
                            <tbody> </tbody>
                        </table>
                    </div>

                    <p className = "text-center h5 mt-4 alert alert-secondary">Resultados</p>
                    <div className = "mx-5">
                        <form>
                            <div className = "row">
                                <div className = "col">
                                    <p className = "form-label text-center">Defectos y Desviaciones</p>
                                    <textarea
                                        type = "text"
                                        rows = {2}
                                        maxLength = {150}
                                        placeholder = "Ingresa Defectos y Desviaciones"
                                        name = "test-case-defects"
                                        className = {`form-control`}
                                        onChange = {(e) => {setDefectsAndDesviations(e.target.value)}}
                                    />
                                </div>
                                <div className = "col">
                                    <p className = "form-label text-center">Veredicto</p>
                                    <textarea
                                        type = "text"
                                        rows = {2}
                                        maxLength = {100}
                                        placeholder = "Ingresa Veredicto"
                                        name = "test-case-veredict"
                                        className = {`form-control`}
                                        onChange = {(e) => {setVeredict(e.target.value)}}
                                    />
                                </div>
                                <div className = "col">
                                    <p className = "form-label text-center">Observaciones</p>
                                    <textarea
                                        type = "text"
                                        rows = {2}
                                        maxLength = {150}
                                        placeholder = "Ingresa Observaciones"
                                        name = "test-case-observations"
                                        className = {`form-control`}
                                        onChange = {(e) => {setObservations(e.target.value)}}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <p className = "text-center h5 mt-4 alert alert-secondary">Probadores</p>
                    <div className = "mx-5">
                    </div>

                    <div className = "d-flex justify-content-center">
                        <button
                            className = "btn btn-success mx-3"
                            onClick = {() => {createTestCase()}}
                        >Confirmar</button>
                        <button
                            className = "btn btn-danger"
                            onClick = {() => handleModalOpen()}
                        >Cancelar</button>
                    </div>
                </div>
              <ModalComponent
                  modalTitle  = {<h4>Cancelar Creación de Caso de Prueba</h4>}
                  modalBody = "Si cancela la creación del caso de prueba, la información consignada hasta ahora se perderá."
                  show = {modalShow}
                  closeAction = {() => handleModalClose}
                  onConfirm = {() => {
                      navigate("/home")
                      handleModalClose()
                  }}
                  onHide = {() => handleModalClose()} //allow hide the modal with clicks without it
              />
            </div>
        </div>
    );
}

export default AddTestCaseComponent
