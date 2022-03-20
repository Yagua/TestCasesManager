import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UserService from '../service/UserService'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";


const ChangePasswordComponent = () => {
    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let [confirmedPassword, setConfirmedPassword] = useState('')
    let [validUserName, setValidUserName] = useState('')
    let [validPassword, setValidPassword] = useState('')
    let [validConfirmedPassword, setValidConfirmedPassword] = useState('')
    let [errorMessage, setErrorMessage] = useState('')
    let [modalBody, setModalBody] = useState('')
    let [showModal, setShowModal] = useState(false)

    let isValidRequest = validUserName && validPassword && validConfirmedPassword
    let navigate = useNavigate()

    const checkValidInput = (value, callback) => {
        let isFieldEmpty = !/^(?!\s*$).+/.test(value)
        callback(isFieldEmpty ? false : true)
    }

    const updatePassword = () => {
        let userTemplate = {
            userName: userName,
            userPassword: password,
        }

        if(password !== confirmedPassword){
            setErrorMessage("Las Contraseña no Coinciden")
            setValidPassword(false)
            setValidConfirmedPassword(false)
            return
        }

        // TODO: improve password change proccess
        UserService.updatePassword(userTemplate)
            .then(_ => { navigate("/home")})
            .catch(error => {
                setModalBody(`El usuario "${userName}" no existe.`)
                setValidUserName(false)
                handleOpenModal()
                console.error(error)
            })
    }

    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <div>
            <nav className = "navbar navbar-dark bg-dark">
                <h3 className="navbar-brand justify-content-start"
                    style={{marginLeft:"20px"}}
                >Restablecimiento de Contraseña</h3>
            </nav>
            <Modal
                show = {showModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>Restablecimiento de Contraseña</ModalHeader>
                <ModalBody>{modalBody}</ModalBody>
                <ModalFooter>
                    <button
                        className="btn btn-secondary"
                        onClick = {() => handleCloseModal()}
                    >Cerrar</button>
                </ModalFooter>
            </Modal>
           <div className = "container my-5">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3 border">
                        <div className = "card-body">
                            <form className = "was-validate">
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nombre de Usuario</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingresa Nombre de usuario"
                                        name = "nombre_usuario"
                                        className = {`form-control ${validUserName ? "is-valid" : "is-invalid"}`}
                                        onChange = {(e) => {
                                            let value = e.target.value
                                            checkValidInput(value, setValidUserName)
                                            setUserName(value)
                                        }}
                                        required
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nueva Contraseña</label>
                                    <input
                                        type = "password"
                                        placeholder = "Ingresa Contraseña"
                                        name = "new_password"
                                        className = {`form-control ${validPassword ? "is-valid" : "is-invalid"}`}
                                        onChange = {(e) => {
                                            let value = e.target.value
                                            checkValidInput(value, setValidPassword)
                                            setPassword(value)
                                        }}
                                        required
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Confirmar Contraseña</label>
                                    <input
                                        type = "password"
                                        placeholder = "Ingresa Contraseña"
                                        name = "confirm_new_password"
                                        className = {`form-control ${validConfirmedPassword ? "is-valid" : "is-invalid"}`}
                                        onChange = {(e) => {
                                            let value = e.target.value
                                            checkValidInput(value, setValidConfirmedPassword)
                                            setConfirmedPassword(value)
                                        }}
                                        required
                                    >
                                    </input>
                                    { !isValidRequest &&
                                        <p className="invalid-feedback"> {errorMessage}</p>
                                    }
                                </div>
                                <buttom
                                    className={`btn ${isValidRequest ? "btn-success" : "btn-secondary"}`}
                                    onClick = {isValidRequest ? () => {updatePassword()} : null}
                                > Aceptar </buttom>
                                <Link to="/home" className="btn btn-danger m-2"> Cancelar </Link>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default ChangePasswordComponent;
