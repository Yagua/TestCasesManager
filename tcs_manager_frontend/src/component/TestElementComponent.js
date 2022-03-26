import { useEffect, useState } from "react";

import TestElementService from '../service/TestElementService'

const TestElementComponent = (props) => {

    let [field, setField] = useState('')
    let [value, setValue] = useState('')
    let [scenario, setScenario] = useState('')
    let [expectedResponse, setExpectedResponse] = useState('')
    let [systemResponse, setSystemResponse] = useState('')
    let [matching, setMatching] = useState(false)
    let [rows, setRows] = useState(props.testElements)
    let [testElementId, setTestElementId] = useState()
    let [modifying, setModifying] = useState(false)
    let [rowIndex, setRowIndex] = useState()

    useEffect(() => {
        props.setTestElements(rows)
    }, [rows])
    console.log(rows)

    const deleteTestCase = (testElementId) => {
        TestElementService.deleteTestElement(testElementId)
            .then(response => {
                console.log(`testElement ${testElementId} deleted`)
            })
            .catch(error => console.error(error))
    }

    const updateTestCase = (testCaseId, testCase ) => {
        TestElementService.partialUpdateTestElement()
            .then(response => {
                console.log(response)
            })
            .catch(error => console.error(error))
    }

    let newRow = {
        testElementId: testElementId,
        field: field,
        value: value,
        scenario: scenario,
        expectedResponse: expectedResponse,
        systemResponse: systemResponse,
        matching: Boolean(matching)
    }

    let field_map = {
        field: document.getElementById("campo"),
        value: document.getElementById("valor"),
        scenario: document.getElementById("escenario"),
        expectedResponse: document.getElementById("respuestaApp"),
        systemResponse: document.getElementById("respuestaSistema"),
        matching: document.getElementById("coincide"),
    }

    const cleanInputFields = () => {
        Object.values(field_map).map((field) => {
            if(field.nodeName === "SELECT") field.value = "[Seleccionar Opción]"
            else field.value = "";
        });
    }

    return (
        <>
           {!props.view &&
            <div className = "card mb-3">
                <div className = "card-body border">
                    <h5 className = "text-center mb-3">Datos de Entrada</h5>
                    <form>
                        <div className = "row">
                            <div className = "col">
                                <p className = "form-label text-center">Campo</p>
                                <textarea
                                    id = "campo"
                                    type = "text"
                                    rows = {1}
                                    maxLength = {150}
                                    placeholder = "Ingresa Campo"
                                    name = "test-case-field"
                                    className = {`form-control`}
                                    onChange = {(e) => {setField(e.target.value)}}
                                />
                            </div>
                            <div className = "col">
                                <p className = "form-label text-center">Valor</p>
                                <textarea
                                    id = "valor"
                                    type = "text"
                                    rows = {1}
                                    maxLength = {150}
                                    placeholder = "Ingresa Valor"
                                    name = "test-case-value"
                                    className = {`form-control`}
                                    onChange = {(e) => {setValue(e.target.value)}}
                                />
                            </div>
                            <div className = "col">
                                <p className = "form-label text-center">Tipo de Esecenario</p>
                                <textarea
                                    id = "escenario"
                                    type = "text"
                                    rows = {1}
                                    maxLength = {150}
                                    placeholder = "Ingresa Tipo de Escenario"
                                    name = "test-case-scenario"
                                    className = {`form-control`}
                                    onChange = {(e) => {setScenario(e.target.value)}}
                                />
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col">
                                <p className = "form-label text-center">Respuesta Eseperada de la Aplicación</p>
                                <textarea
                                    id = "respuestaApp"
                                    type = "text"
                                    rows = {1}
                                    maxLength = {150}
                                    placeholder = "Ingresa Respuesta Esperada de la Aplicación"
                                    name = "test-case-app-ans"
                                    className = {`form-control`}
                                    onChange = {(e) => {setExpectedResponse(e.target.value)}}
                                />
                            </div>
                            <div className = "col">
                                <p className = "form-label text-center">Coincide</p>
                                <select
                                    id = "coincide"
                                    className="form-select"
                                    aria-label="TestCase-selection"
                                    onChange = {(e) => {
                                        //convert it to boolean
                                        setMatching(e.target.value == "true")
                                    }}
                                >
                                  <option className = "text-center">[Seleccionar Opción]</option>
                                  <option value={true}>Si</option>
                                  <option value={false}>No</option>
                                </select>
                            </div>
                            <div className = "col">
                                <p className = "form-label text-center">Repuesta del Sistema</p>
                                <textarea
                                    id = "respuestaSistema"
                                    type = "text"
                                    rows = {1}
                                    maxLength = {150}
                                    placeholder = "Ingresa Respuesta del Sistema"
                                    name = "test-case-system-ans"
                                    className = {`form-control`}
                                    onChange = {(e) => {setSystemResponse(e.target.value)}}
                                />
                            </div>
                        </div>
                    </form>
                    <div className = "d-flex justify-content-center mt-3">
                        <button
                            className = {`btn ${!modifying ? "btn-success" : "btn-primary"} mx-3`}
                            onClick = {() => {
                                    if(!modifying) {
                                        rows.push(newRow)
                                        setRows([...rows])
                                    } else {
                                        rows[rowIndex] = newRow
                                        setModifying(false)
                                        cleanInputFields()
                                    }
                                }
                            }
                        >{modifying ? "Modificar": "Agregar"}</button>
                        <button
                            className = "btn btn-danger"
                            onClick = {() => {
                                cleanInputFields()
                                setModifying(false)
                            }}
                        >Limpiar</button>
                    </div>
                </div>
            </div>
            }

            <div className="table-responsive custom-table-responsive">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th className = "text-center">Campo</th>
                            <th className = "text-center">Valor</th>
                            <th className = "text-center">Tipo de Esecenario</th>
                            <th className = "text-center">Respuesta Esperada de la Aplicación</th>
                            <th className = "text-center">Coincide</th>
                            <th className = "text-center">Respuesta del Sistema</th>
                            {!props.view &&
                            <th className = "text-center">Acciones</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index)=> {
                            return (
                            <>
                                <tr key={`ft-${index}`} className="spacer"><td colSpan="100"></td></tr>
                                <tr key = {index} >
                                    <td>{row.field}</td>
                                    <td>{row.value}</td>
                                    <td>{row.scenario}</td>
                                    <td>{row.expectedResponse}</td>
                                    <td>{row.matching ? "Si" : "No" }</td>
                                    <td>{row.systemResponse}</td>
                                    {!props.view &&
                                        <>
                                    <td className = "text-center">
                                        <button
                                            className = "btn btn-primary m-1"
                                            onClick = {() => {
                                                setRowIndex(index)
                                                field_map.field.value = row.field;
                                                field_map.value.value = row.value;
                                                field_map.scenario.value = row.scenario;
                                                field_map.expectedResponse.value = row.expectedResponse;
                                                field_map.systemResponse.value = row.systemResponse;
                                                field_map.matching.value = row.matching;
                                                setModifying(true)
                                            }}
                                        >Editar</button>
                                        <button
                                            className = "btn btn-danger m-1"
                                            onClick = {() => {
                                                setRows(rows.filter((row) => {
                                                    return row !== rows[index]
                                                }))
                                            }}
                                        >Eliminar</button>
                                    </td>
                                    </>
                                    }
                                </tr>
                                <tr key={`fb-${index}`} className="spacer"><td colSpan="100"></td></tr>
                            </>
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>
            {rows.length === 0 &&
            <p className = "text-center text-muted fst-italic">No Hay Elementos Para Mostrar</p>
            }
        </>
    );
}

export default TestElementComponent;
