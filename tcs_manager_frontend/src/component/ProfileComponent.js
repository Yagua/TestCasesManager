import {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

import HeaderComponent from "./HeaderComponent"
import UserService from "../service/UserService"
import userImg from "../img/user.png"
import LoadingComponent from "./LoadingComponent"
import ModalComponent from './ModalComponent'


const ProfileComponent = (props) => {
    let [user, setUser] = useState({});
    let [isLoaded, setIsLoaded] = useState(false);
    let [modalShow, setModalShow] = useState(false)

    let userId = localStorage.getItem("loggedUserId");
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")

        UserService.getUserById(userId)
            .then((user) => {
                setUser(user);
                setIsLoaded(true);
            })
    }, [])

    const deleteUser = () => {
        //TODO: implemente user validation before delete the user
        UserService.deleteUser(userId)
            .then(response => {
                localStorage.removeItem("loggedUserId")
                localStorage.removeItem("isAthenticated")
                localStorage.removeItem("userName")
                navigate("/login")
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleModalClose = () => setModalShow(false)
    const handleModalOpen = () => setModalShow(true)

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <HeaderComponent onHome={false} navBarBrand = "Perfil de Usuario"/>
                <ModalComponent
                    modalTitle={<h4>Esta seguro de borrar el usuario "{user.userName}"</h4>}
                    modalBody="Si elimina el usuario, todos sus datos se perderán también."
                    show = {modalShow}
                    closeAction = {() => handleModalClose}
                    onConfirm = {() => {
                        deleteUser(userId)
                        handleModalClose()
                    }}
                    onHide = {() => handleModalClose()} //allow hide the modal with clicks without it
                />
                <div className="m-2" >
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body border">
                            <img src={userImg}
                                 className="rounded-circle img-thumbnail mx-auto d-block user-img"
                                 alt="userImg.png"
                            />
                        <hr className="mx-5"/>
                        <div className="mx-5">
                            <h5><strong>Id de Usuario: </strong>{user.userId}</h5>
                            <h5><strong>Nombres: </strong>{user.firstName} {user.secondName}</h5>
                            <h5><strong>Apellidos: </strong>{user.paternalLastName} {user.maternalLastName}</h5>
                            <h5><strong>Nombre de usuario: </strong>{user.userName}</h5>
                            <h5><strong>Cantidad de Casos de Prueba: </strong>{user.testCases.length}</h5>
                        </div>
                        <br/>
                        <Link
                            className="btn btn-success mx-auto d-block my-2"
                            to = "/updateinfo"
                        > Actualizar Datos Usuario</Link>
                        <buttom
                            className="btn btn-danger mx-auto d-block my-2"
                            onClick = {() => handleModalOpen()}
                        > Eliminar Usuario</buttom>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return renderContent()
}

export default ProfileComponent
