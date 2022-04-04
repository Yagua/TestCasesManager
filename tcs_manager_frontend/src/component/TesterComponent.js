import {useState, useEffect} from 'react'

import TesterService from '../service/TesterService'

const TesterComponent = (props) => {
    let [testerId, setTesterId] = useState()
    let [testCaseId] = useState(props.testCaseId)
    let [firstName, setFirstName] = useState('')
    let [secondName, setSecondName] = useState('')
    let [paternalLastName, setPaternalLastName] = useState('')
    let [maternalLastName, setMaternalLastName] = useState('')
    let [sing, setSing] = useState('')
    let [rows, setRows] = useState(props.testers)
    let [modifying, setModifying] = useState(false)
    let [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        let testCaseId = props.testCaseId;
        if(testCaseId === "none") {
            props.setTesters(rows);
            return
        };
        // props.setTesters(rows)
    }, [rows])

    const createTester = (testCaseId, tester) => {
        TesterService.createTester(testCaseId, tester)
            .then(_ => {})
            .catch(error => console.error(error))
    }

    const updateTester = (testerId, tester) => {
        TesterService.partialUpdateTester(testerId, tester)
            .then(_ => {})
            .catch(error => console.error(error))
    }

    const deleteTester = (testerId) => {
        TesterService.deleteTester(testerId)
            .then(_ => {})
            .catch(error => console.error(error))
    }

    let newRow = {
        testerId: testerId,
        firstName: firstName,
        secondName: secondName,
        paternalLastName: paternalLastName,
        maternalLastName: maternalLastName,
        sing: sing
    }

    let field_map = {
        testerId: document.getElementById("tester_id"),
        firstName: document.getElementById("first_name"),
        secondName: document.getElementById("second_name"),
        paternalLastName: document.getElementById("parternal_lastname"),
        maternalLastName: document.getElementById("maternal_lastname"),
        sing: document.getElementById("tester_sing")
    }

    const cleanInputFields = () => {
        Object.values(field_map).map((field) => {
            if(field.nodeName === "SELECT") field.value = "[Seleccionar Opción]"
            else field.value = "";
        });
    }

    const handleModalClose = () => setModalShow(false)
    const handleModalOpen = (testerId) => {
        setTesterId(testerId);
        setModalShow(true)
    }

    //TODO: change the lenth of the fields
    return (
        <div>
           {!props.view &&
            <div className = "card mb-3">
                <div className = "card-body border">
                    <h5 className = "text-center mb-3">Datos de Entrada</h5>
                    <form>
                        <div className = "row">
                            <div className = "col-sm-1">
                                <p className = "form-label text-center">ID</p>
                                <input
                                    id = "tester_id"
                                    type = "text"
                                    disabled = {true}
                                    placeholder = "Auto"
                                    name = "tester-id"
                                    className = {`form-control text-muted fst-italic text-center`}
                                    onChange = {(e) => {setTesterId(e.target.value)}}
                                />
                            </div>
                            <div className = "col">
                                <p className = "form-label text-center">Primer Nombre</p>
                                <input
                                    id = "first_name"
                                    type = "text"
                                    maxLength = {20}
                                    placeholder = "Ingresa Primer Nombre"
                                    name = "tester-first-name"
                                    className = {`form-control`}
                                    onChange = {(e) => {setFirstName(e.target.value)}}
                                />
                            </div>
                            <div className = "col">
                                <p className = "form-label text-center">Segundo Nombre</p>
                                <input
                                    id = "second_name"
                                    type = "text"
                                    maxLength = {20}
                                    placeholder = "Ingresa Segundo Nombre"
                                    name = "tester-second-name"
                                    className = {`form-control`}
                                    onChange = {(e) => {setSecondName(e.target.value)}}
                                />
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col">
                                <p className = "form-label text-center">Apellido Paterno</p>
                                <input
                                    id = "parternal_lastname"
                                    type = "text"
                                    maxLength = {20}
                                    placeholder = "Ingresa Apellido Paterno"
                                    name = "tester-paternal-lastname"
                                    className = {`form-control`}
                                    onChange = {(e) => {setPaternalLastName(e.target.value)}}
                                />
                            </div>
                            <div className = "col">
                                <p className = "form-label text-center">Apellido Materno</p>
                                <input
                                    id = "maternal_lastname"
                                    type = "text"
                                    maxLength = {20}
                                    placeholder = "Ingresa Apellido Materno"
                                    name = "tester-maternal-lastname"
                                    className = {`form-control`}
                                    onChange = {(e) => {setMaternalLastName(e.target.value)}}
                                />
                            </div>
                            <div className = "col">
                                <p className = "form-label text-center">Firma</p>
                                <input
                                    id = "tester_sing"
                                    type = "text"
                                    maxLength = {20}
                                    placeholder = "Ingresa Firma"
                                    name = "tester-sign"
                                    className = {`form-control`}
                                    onChange = {(e) => {setSing(e.target.value)}}
                                />
                            </div>
                        </div>
                    </form>
                    <div className = "d-flex justify-content-center mt-3">
                        <button
                            className = {`btn ${!modifying ? "btn-success" : "btn-primary"} mx-3`}
                            onClick = {() => {
                                    if(!modifying) {
                                        testCaseId !== "none"
                                            ? createTester(testCaseId, newRow)
                                            : rows.push(newRow);
                                              setRows([... rows])
                                        cleanInputFields()
                                    } else {
                                        testCaseId !== "none"
                                            ? updateTester(testerId, newRow)
                                            : rows[testerId] = newRow;
                                              setRows([... rows]);
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
                        >{modifying ? "Cancelar" : "Limpiar" }</button>
                    </div>
                </div>
            </div>
            }
            <div className="table-responsive custom-table-responsive">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th className = "text-center">Id</th>
                            <th className = "text-center">Primer Nombre</th>
                            <th className = "text-center">Segundo Nombre</th>
                            <th className = "text-center">Apellido Paterno</th>
                            <th className = "text-center">Apellido Materno</th>
                            <th className = "text-center">Firma</th>
                            {!props.view &&
                            <th className = "text-center">Acciones</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => {
                            return (
                                <>
                                    <tr key={`ft-${index}`} className="spacer"><td colSpan="100"></td></tr>
                                    <tr key={index}>
                                        <td>{row.testerId ? row.testerId : `tmp-${index}`}</td>
                                        <td>{row.firstName}</td>
                                        <td>{row.secondName}</td>
                                        <td>{row.paternalLastName}</td>
                                        <td>{row.maternalLastName}</td>
                                        <td>{row.sing}</td>
                                        {!props.view &&
                                            <>
                                        <td className = "text-center">
                                            <button
                                                className = "btn btn-primary m-1"
                                                onClick = {() => {
                                                    let teId = row.testerId ? row.testerId : index

                                                    setTesterId(teId);
                                                    field_map.testerId.value = teId
                                                    field_map.firstName.value = row.firstName
                                                    field_map.secondName.value = row.secondName
                                                    field_map.paternalLastName.value = row.paternalLastName
                                                    field_map.maternalLastName.value = row.maternalLastName
                                                    field_map.sing.value = row.sing
                                                    setModifying(true)
                                                }}
                                            >Editar</button>
                                            <button
                                                className = "btn btn-danger m-1"
                                                onClick = {() => {
                                                    if(testCaseId !== "none") {
                                                        handleModalOpen(row.testerId)
                                                    } else {
                                                        setRows(rows.filter((item) => {
                                                            return item !== rows[testerId]
                                                        }))
                                                    }
                                                }}
                                            >Eliminar</button>
                                        </td>
                                        </>
                                        }
                                    </tr>
                                    <tr key={`fb-${index}`} className="spacer"><td colSpan="100"></td></tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {rows.length === 0 &&
            <p className = "text-center text-muted fst-italic">No Hay Elementos Para Mostrar</p>
            }
        </div>
    );
}

export default TesterComponent
