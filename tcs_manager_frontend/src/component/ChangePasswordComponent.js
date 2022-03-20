import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

import UserService from '../service/UserService'
import { checkValidInput } from '../lib/util'

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
                setShowModal(true)
                console.error(error)
            })
    }

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
                        onClick = {() => setShowModal(false)}
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
                                            setValidUserName(checkValidInput(value))
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
                                            setValidPassword(checkValidInput(value))
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
                                            setValidConfirmedPassword(checkValidInput(value))
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
                                <Link
                                    to={localStorage.getItem("isAthenticated") ? "/home" : "/login"}
                                    className="btn btn-danger m-2"
                                > Cancelar </Link>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default ChangePasswordComponent;
