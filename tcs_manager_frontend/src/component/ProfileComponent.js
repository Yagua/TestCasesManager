import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import HeaderComponent from "./HeaderComponent"
import UserService from "../service/UserService"
import userImg from "../img/user.png"
import LoadingComponent from "./LoadingComponent"

const ProfileComponent = (props) => {
    let [user, setUser] = useState({});
    let [isLoaded, setIsLoaded] = useState(false);
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

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <HeaderComponent onProfile={true}/>
                <div className="m-4" >
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body border">
                            <img src={userImg}
                                 className="rounded-circle img-thumbnail mx-auto d-block userImg"
                                 alt="userImg.png"
                                 id = "userImg"
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
                        <button className="btn btn-success mx-auto d-block my-2">
                            Actualizar Datos Usuario</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return renderContent()
}

export default ProfileComponent
