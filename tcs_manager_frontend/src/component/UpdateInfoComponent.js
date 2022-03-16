import {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

import HeaderComponent from "./HeaderComponent"
import LoadingComponent from "./LoadingComponent.js"
import UserService from "../service/UserService"

const UpdateInfoComponent = () => {
    let [isLoaded, setIsLoaded] = useState(false);
    let userId = localStorage.getItem("loggedUserId");
    const navigate = useNavigate()

    let [firstName, setFirstName] = useState('')
    let [secondName, setSecondName] = useState('')
    let [paternalLastName, setPaternalLastName] = useState('')
    let [maternalLastName, setMaternalLastName] = useState('')
    let [userName, setUserName] = useState('')

    useEffect(() => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")

        UserService.getUserById(userId)
            .then((user) => {
                setFirstName(user.firstName)
                setSecondName(user.secondName)
                setPaternalLastName(user.paternalLastName)
                setMaternalLastName(user.maternalLastName)
                setUserName(user.userName)
                setIsLoaded(true);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const updatedUser = {
        firstName: firstName,
        secondName: secondName,
        paternalLastName: paternalLastName,
        maternalLastName: maternalLastName,
        userName: userName
    }

    const updateInformation = () => {
        UserService.partialUpdate(userId, updatedUser)
            .then(data => {
                navigate("/home")
            })
            .catch(error => {
                alert(`Un usuario con el user name "${userName}" ya existe!`)
                console.error(error)
            })
    }

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <HeaderComponent
                    navBarBrand="Actualización de Información"
                    onProfile={true}
                />
                <div>
                   <div className = "container my-3">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 border">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> Primer Nombre</label>
                                            <input
                                                type = "text"
                                                placeholder = "Ingresa Primer Nombre"
                                                name = "firstName"
                                                className = "form-control"
                                                value = {firstName}
                                                onChange = {(e) => {setFirstName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> Segundo Nombre</label>
                                            <input
                                                type = "text"
                                                placeholder = "Ingresa Segundo Nombre"
                                                name = "firstName"
                                                className = "form-control"
                                                value = {secondName}
                                                onChange = {(e) => {setSecondName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> Apellido Paterno</label>
                                            <input
                                                type = "text"
                                                placeholder = "Ingresa Apellido Paterno"
                                                name = "lastName"
                                                className = "form-control"
                                                value = {paternalLastName}
                                                onChange = {(e) => {setPaternalLastName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> Apellido Materno</label>
                                            <input
                                                type = "text"
                                                placeholder = "Ingresa Apellido Materno"
                                                name = "lastName"
                                                className = "form-control"
                                                value = {maternalLastName}
                                                onChange = {(e) => {setMaternalLastName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> Nombre de Usuario</label>
                                            <input
                                                type = "text"
                                                placeholder = "Ingresa Nombre de usuario"
                                                name = "emailId"
                                                className = "form-control"
                                                value = {userName}
                                                onChange = {(e) => {setUserName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <buttom
                                            className="btn btn-success"
                                            onClick = {() => {updateInformation()}}
                                        > Aceptar </buttom>
                                        <Link to="/home" className="btn btn-danger m-2"> Cancelar </Link>
                                    </form>
                                    <Link to="/restorePassword"> Cambiar Contraseña </Link>
                                </div>
                            </div>
                        </div>

                   </div>
                </div>
            </div>
        );
    }

    return renderContent()
}

export default UpdateInfoComponent;
