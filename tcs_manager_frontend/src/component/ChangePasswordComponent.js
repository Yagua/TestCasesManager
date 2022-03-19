import { Modal } from 'bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import UserService from '../service/UserService'

const ChangePasswordComponent = (props) => {
    let userId = localStorage.getItem("loggedUserId");
    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let [confirmedPassword, setConfirmedPassword] = useState('')

    let navigate = useNavigate()

    const userTemplate = {
        userName: userName,
        userPassword: password,
    }

    const updatePassword = () => {
        console.log(userName, password, confirmedPassword)
        console.log(userTemplate)

        //TODO:  improve this implementation
        let thereAreEmptyFields = false
        Object.values(userTemplate).forEach(([_, value]) => {
            if(value.trim() === "") thereAreEmptyFields = true
        })

        if(thereAreEmptyFields) {
            alert("No pueden haber Campos Vacios")
            return
        }

        if(password !== confirmedPassword){
            alert("Las Contraseña no Coinciden")
            return
        }

        // TODO: improve password change proccess
        UserService.updatePassword(userTemplate)
            .then(user => {
                navigate("/home")
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <nav className = "navbar navbar-dark bg-dark">
                <h3 className="navbar-brand justify-content-start"
                    style={{marginLeft:"20px"}}
                >Restablecimiento de Contraseña</h3>
            </nav>
           <div className = "container my-5">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3 border">
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nombre de Usuario</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingresa Nombre de usuario"
                                        name = "nombre_usuario"
                                        className = "form-control"
                                        onChange = {(e) => {setUserName(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nueva Contraseña</label>
                                    <input
                                        type = "password"
                                        placeholder = "Ingresa Contraseña"
                                        name = "new_password"
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
                                        name = "confirm_new_password"
                                        className = "form-control"
                                        onChange = {(e) => {setConfirmedPassword(e.target.value)}}
                                    >
                                    </input>
                                </div>
                                <buttom
                                    className="btn btn-success"
                                    onClick = {() => {updatePassword()}}
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
