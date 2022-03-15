import HeaderComponent from "./HeaderComponent"
import userImg from "../img/user.png"

const ProfileComponent = () => {
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
                        <h5><strong>Nombres: </strong>aca nombres</h5>
                        <h5><strong>Apellidos: </strong>aca apellidos</h5>
                        <h5><strong>Nombre de usuario: </strong>aca nombre usuario</h5>
                        <h5><strong>Cantidad de Casos de Prueba: </strong>cantidad</h5>
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

export default ProfileComponent
