import {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Modal } from 'bootstrap'

import HeaderComponent from "./HeaderComponent"
import LoadingComponent from "./LoadingComponent.js"
import UserService from "../service/UserService"

const UpdateInfoComponent = () => {
    let [isLoaded, setIsLoaded] = useState(false);
    let userId = localStorage.getItem("loggedUserId");
    let isAthenticated = localStorage.getItem("isAthenticated")
    const navigate = useNavigate()

    let [firstName, setFirstName] = useState('')
    let [secondName, setSecondName] = useState('')
    let [paternalLastName, setPaternalLastName] = useState('')
    let [maternalLastName, setMaternalLastName] = useState('')
    let [userName, setUserName] = useState('')

    useEffect(() => {
        if(!isAthenticated) navigate("/login")

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
        // TODO: change this implementation
        let isThereEmptyFields = false
        Object.entries(updatedUser).forEach(([_, value])=> {
            if(value.trim() === "") {
                isThereEmptyFields = true
            }
        });

        if(isThereEmptyFields) {
            alert("There cannot be empty fields")
            return
        }

        UserService.partialUpdate(userId, updatedUser)
            .then(data => {
                navigate("/home")
            })
            .catch(error => {
                alert(`The user "${userName}" already exist!`)
                console.error(error)
            })
    }

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <HeaderComponent
                    navBarBrand="Update Information"
                    onHome={false}
                />
                <div>
                   <div className = "container my-3">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 border">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> First Name</label>
                                            <input
                                                type = "text"
                                                maxLength = {20}
                                                placeholder = "Enter First Name"
                                                name = "firstName"
                                                className = "form-control"
                                                value = {firstName}
                                                onChange = {(e) => {setFirstName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> Second Name</label>
                                            <input
                                                type = "text"
                                                maxLength = {20}
                                                placeholder = "Enter Second Name"
                                                name = "firstName"
                                                className = "form-control"
                                                value = {secondName}
                                                onChange = {(e) => {setSecondName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> Paternal Last Name</label>
                                            <input
                                                type = "text"
                                                maxLength = {20}
                                                placeholder = "Enter Paternal Last Name"
                                                name = "lastName"
                                                className = "form-control"
                                                value = {paternalLastName}
                                                onChange = {(e) => {setPaternalLastName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> Maternal Last Name</label>
                                            <input
                                                type = "text"
                                                maxLength = {20}
                                                placeholder = "Enter Maternal Last Name"
                                                name = "lastName"
                                                className = "form-control"
                                                value = {maternalLastName}
                                                onChange = {(e) => {setMaternalLastName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <div className = "form-group mb-2">
                                            <label className = "form-label"> User Name</label>
                                            <input
                                                type = "text"
                                                maxLength = {20}
                                                placeholder = "Enter User Name"
                                                name = "userName"
                                                className = "form-control"
                                                value = {userName}
                                                onChange = {(e) => {setUserName(e.target.value)}}
                                            >
                                            </input>
                                        </div>
                                        <buttom
                                            className="btn btn-success"
                                            onClick = {() => {updateInformation()}}
                                        > Accept </buttom>
                                        <Link to="/home" className="btn btn-danger m-2"> Cancel </Link>
                                    </form>
                                    <Link to="/updatepassword"> Change Password </Link>
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
