import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = (props) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("loggedUserId")
        localStorage.removeItem("isAthenticated")
        navigate("/login")
    }

    return (
        <div>
            <nav className = "navbar navbar-dark bg-dark">
                <h3 className="navbar-brand justify-content-start"
                    style={{marginLeft:"20px"}}
                >{props.onProfile ? "Perfil de Usuario" : "Gestor de Casos de Pruebas"}</h3>
                <ul className="nav">
                  {props.onProfile ?
                      <li className="nav-item">
                        <a
                            className="active btn btn-primary"
                            onClick={() => {navigate("/home")}}
                        >Atras</a>
                      </li> :
                      <li className="nav-item">
                        <a
                            className="active btn btn-primary"
                            onClick={() => {navigate("/profile")}}
                        >Perfil</a>
                      </li>
                  }
                  <li className="nav-item" style={{marginLeft:"10px", marginRight:"10px"}}>
                    <a
                        className="active btn btn-primary"
                        onClick={() => { logout() }}
                    >Salir</a>
                  </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent
