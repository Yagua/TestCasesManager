import {useEffect, useState } from "react";
import AuthService from '../service/AuthService'
import {Link} from 'react-router-dom'

const LoginComponent = () => {
    let [userName, setUserName] = useState('')
    let [userPassword, setUserPassword] = useState('')
    let [userFound, setUserFound] = useState(true)

    const findUser = (e) => {
        e.preventDefault()
        AuthService.loginUser(userName, userPassword)
            .then(userData => {
                localStorage.setItem("loggedUserId", userData.userId)
                localStorage.setItem("isAthenticated", true)
                setUserFound(true)
            }).catch(error => {
                setUserFound(false)
                console.log(error)
            });
    }

    const displayAlert = () => {
        return !userFound ?
            <div className="alert alert-danger"> Usuario No Encontrado </div>
            : <></>
    }

    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <h2 style={{color: "White", margin: "auto"}}>Ingreso al Sistema</h2>
                </nav>
            </header>
            <br/>
            <div className="container">
            </div>
            <br/>
            <div className="card col-md-6 offset-md-3">
                <div className = "card-body">
                    { displayAlert() }
                    <form>
                      <div className="mb-3">
                        <label htmlFor="userName" className="form-label">Nombre de Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange = {(e) => setUserName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange = {(e) => setUserPassword(e.target.value)}
                        />
                      </div>
                      <button
                            type="submit"
                            className="btn btn-primary"
                            onClick = {(e) => findUser(e)}
                      >Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent
