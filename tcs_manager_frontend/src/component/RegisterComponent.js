import { Modal } from 'bootstrap'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserService from '../service/UserService'

const RegisterCompenent = () => {
    let [userName, setUserName] = useState('')
    let [firstName, setFirstName] = useState('')
    let [secondName, setSecondName] = useState('')
    let [paternalLastName, setPaternalLastName] = useState('')
    let [maternalLastName, setMaternalLastName] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')

    let navigate = useNavigate()

    const userTemplate = {
        userName: userName,
        firstName: firstName,
        secondName: secondName,
        paternalLastName: paternalLastName,
        maternalLastName: maternalLastName,
        password: password
    }

    const registerUser = () => {
        let thereAreEmptyField = false

        Object.values(userTemplate).forEach(value => {
            value = value ? value : "";
            if(value.trim() === "") thereAreEmptyField = true;
        });

        if(thereAreEmptyField) {
            alert("No pueden haber campos vacios")
            return
        }
        if(password !== confirmPassword) {
            alert("Las Contrasenas no Coinciden")
            return
        }

        UserService.createUser(userTemplate)
            .then(response => {
                navigate("/login")
            })
            .catch(error => {
                alert(`El user name "${userName}" ya esta en uso`)
                console.error(error)
            })

    }

    return (
        <div>
           <div className="sticky-top">
               <nav className = "navbar navbar-dark bg-dark">
                   <h3 className="navbar-brand justify-content-start"
                       style={{marginLeft:"20px"}}
                   >Registro de Usuario</h3>
               </nav>
           </div>
           <div className = "container my-4">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3 border">
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nombre de Usuario</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingresa Nombre de usuario"
                                        className = "form-control"
                                        onChange = {(e) => {setUserName(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Primer Nombre</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingresa Primer Nombre"
                                        className = "form-control"
                                        onChange = {(e) => {setFirstName(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Segundo Nombre</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese Segundo Nombre"
                                        className = "form-control"
                                        onChange = {(e) => {setSecondName(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Apellido Paterno</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingresa Apellido Paterno"
                                        className = "form-control"
                                        onChange = {(e) => {setPaternalLastName(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Apellido Materno</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese Apellido Materno"
                                        className = "form-control"
                                        onChange = {(e) => {setMaternalLastName(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nueva Contraseña</label>
                                    <input
                                        type = "password"
                                        placeholder = "Ingresa Contraseña"
                                        className = "form-control"
                                        onChange = {(e) => {setPassword(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Confirmar Contraseña</label>
                                    <input
                                        type = "password"
                                        placeholder = "Ingresa Contraseña"
                                        className = "form-control"
                                        onChange = {(e) => {setConfirmPassword(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <buttom
                                    className="btn btn-success"
                                    onClick = {() => {registerUser()}}
                                > Registrar</buttom>
                                <Link to="/login" className="btn btn-danger m-2"> Cancelar </Link>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default RegisterCompenent
