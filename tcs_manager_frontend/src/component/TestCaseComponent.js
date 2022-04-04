import { useState, useEffect} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import HeaderComponent from '../component/HeaderComponent'
import TestCaseService from '../service/TestCaseService'
import LoadingComponent from './LoadingComponent'
import ModalComponent from './ModalComponent'
import TestElementCompenent from './TestElementComponent'
import TesterComponent from './TesterComponent'

const TestCaseComponent = () => {
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
    let [isLoaded, setIsLoded] = useState(false)
    let [readyToUpdate, setReadyToUpdate] = useState(false)
    let [searchParams, setSearchParams] = useSearchParams()
    let [view, setView] = useState(searchParams.get("view") === "true")
    let [tcId, setTcId] = useState(searchParams.get("tcId"))
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
        if(!localStorage.getItem("isAthenticated")) navigate("/login")
        if(tcId === "none") { setIsLoded(true); return }
        TestCaseService.getTestCase(tcId)
            .then(response => {
                setTestCaseName(response.testCaseName)
                setTestCaseVersion(response.testCaseVersion)
                setExecutionDate(response.executionDate)
                setSystemModule(response.systemModule)
                setTestCaseDescription(response.testCaseDescription)
                setPreconditions(response.preconditions)
                setTestSteps(response.testSteps)
                setPostconditions(response.postconditions)
                setDefectsAndDesviations(response.defectsAndDesviations)
                setVeredict(response.veredict)
                setObservations(response.observations)
                setTesters(response.testers)
                setTestElements(response.testElements)
                setIsLoded(true)
            })
            .catch(error => console.error(error))
    }, [tcId, view])

    const createTestCase = () => {
        TestCaseService.createTestCase(userId, testCaseTemplate)
            .then(_ => {
                navigate("/home")
            })
            .catch(error => console.error(error))
    }

    const updateTestCase = () => {
        TestCaseService.updateTestCase(tcId, testCaseTemplate)
            .then(_ => {
                navigate("/home")
            })
            .catch(error => console.error(error))
    }

    const handleModalClose = () => setModalShow(false)
    const handleModalOpen = () => setModalShow(true)

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <HeaderComponent
                    onHome = {false}
                    navBarBrand = "Creación de Casos de Prueba"
                />
                <h2 className = "text-center text-muted m-3">{view ? `Caso de uso #${tcId}` : "Agregar Nuevo Caso de Prueba"}</h2>
                <div className = "card m-4">
                    <div className = "card-body border">
                        <div className = {`${view && "overlay"}`}>
                            <p className = "text-center h5 mt-2 alert alert-secondary">Información Global</p>
                            <div className = "mx-5">
                                <form className = "was-validate">
                                    <div className = "row">
                                        <div className = "col">
                                            <p className = "form-label text-center">Nombre Caso de Prueba</p>
                                            <input
                                                type = "text"
                                                defaultValue = {testCaseName}
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
                                                defaultValue = {testCaseVersion}
                                                maxLength = {20}
                                                placeholder = "Ingresa Version"
                                                name = "test-case-version"
                                                className = {`form-control`}
                                                onChange = {(e) => {setTestCaseVersion(e.target.value)}}
                                            />
                                        </div>
                                        <div className = "col">
                                            <p className = "form-label text-center">Fecha Ejecución</p>
                                            <input
                                                type = "date"
                                                defaultValue = {executionDate}
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
                                                defaultValue = {systemModule}
                                                maxLength = {80}
                                                placeholder = "Ingresa Módulo del Sistema"
                                                name = "test-system-module"
                                                className = {`form-control`}
                                                onChange = {(e) => {setSystemModule(e.target.value)}}
                                            />
                                        </div>
                                        <div className = "col">
                                            <p className = "form-label text-center">Descripción del Caso de Prueba</p>
                                            <textarea
                                                type = "text"
                                                defaultValue = {testCaseDescription}
                                                rows = {1}
                                                maxLength = {150}
                                                placeholder = "Ingresa Descripción"
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
                                                rows = {4}
                                                defaultValue = {preconditions}
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
                                                defaultValue = {testSteps}
                                                rows = {4}
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
                                                defaultValue = {postconditions}
                                                rows = {4}
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
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                       <h2 class="accordion-header" id="headingOne">
                                         <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Desplegar Contenido
                                         </button>
                                       </h2>
                                       <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                         <div class="accordion-body">
                                            <TestElementCompenent
                                                testCaseId = {tcId}
                                                setTestElements = {setTestElements}
                                                view = {view}
                                            />
                                         </div>
                                       </div>
                                     </div>
                                </div>
                            </div>

                            <p className = "text-center h5 mt-4 alert alert-secondary">Resultados</p>
                            <div className = "mx-5">
                                <form>
                                    <div className = "row">
                                        <div className = "col">
                                            <p className = "form-label text-center">Defectos y Desviaciones</p>
                                            <textarea
                                                type = "text"
                                                defaultValue = {defectsAndDesviations}
                                                rows = {4}
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
                                                defaultValue = {veredict}
                                                rows = {4}
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
                                                rows = {4}
                                                defaultValue = {observations}
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
                                <div class="accordion mb-3" id="testersAcorddion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Desplegar Contenido
                                          </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div class="accordion-body">
                                                <TesterComponent
                                                    testCaseId = {tcId}
                                                    testers = {testers}
                                                    setTesters = {setTesters}
                                                    view = {view}
                                                />
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = "d-flex justify-content-center">
                            {!view ?
                            <>
                                <button
                                    className = "btn btn-success mx-3"
                                    onClick = {() => { readyToUpdate ? updateTestCase() : createTestCase()}}
                                >{readyToUpdate ? "Finalizar" : "Crear"}</button>
                                <button
                                    className = "btn btn-danger"
                                    onClick = {() => {
                                        handleModalOpen()
                                    }}
                                >Cancelar</button>
                            </>
                                :
                            <>
                                <button
                                    className = "btn btn-primary mx-3"
                                    onClick = {() => {
                                        setView(false)
                                        setReadyToUpdate(true)
                                        setSearchParams({tcId, view})
                                    }}
                                >Modificar</button>
                                <button
                                    className = "btn btn-secondary"
                                    onClick = {() => navigate("/home")}
                                >Regresar</button>
                            </>
                            }
                        </div>
                    </div>
                  <ModalComponent
                      modalTitle  = {<h4>Cancelar Operación sobre Caso de Prueba</h4>}
                      modalBody = "Si cancela el proceso, la información consignada hasta ahora se perderá."
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

    return renderContent()
}

export default TestCaseComponent
