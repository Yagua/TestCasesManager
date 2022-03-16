import { useState, useEffect } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import LoadingComponent from './LoadingComponent'
import UserService from '../service/UserService'

const ChangePasswordComponent = (props) => {
    let userId = localStorage.getItem("loggedUserId");
    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let [confirmedPassword, setConmfirmedPassword] = useState('')

    const renderContent = () => {

        const userTemplate = {
            userName: userName,
            password: password,
            confirmedPassword: confirmedPassword
        }
        const updatePassword = () => {
            if(password !== confirmedPassword){
                alert("Las Contraseña no Coinciden")
                return
            }
            //todo  improve this implementation
            let isThereEmptyFields = false
            Object.values(userTemplate).forEach(([_, value]) => {
                if(value.trim() === "") {
                    isThereEmptyFields = true
                }
            })
            if(isThereEmptyFields) {
                alert("No pueden haber Campos Vacios")
                return
            }

            //code to update password here
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
                                            value = {localStorage.getItem("userName")}
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
                                            onChange = {(e) => {setConmfirmedPassword(e.target.value)}}
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

    return renderContent()
}

export default ChangePasswordComponent;
