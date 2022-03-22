import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const HeaderComponent = (props) => {
    return (
        <div className="sticky-top">
            <nav className = "navbar navbar-dark bg-dark">
                <h3 className="navbar-brand justify-content-start"
                    style={{marginLeft:"20px"}}
                >{props.navBarBrand ? props.navBarBrand : "Gestor de Casos de Pruebas"}</h3>
                <ul className="nav">
                  {!props.onHome ?
                      <li className="nav-item">
                        <Link
                            to = "/home"
                            className="active btn btn-primary"
                        >Atras</Link>
                      </li> :
                      <>
                          <li className="nav-item text-white m-2 h5">
                            @{props.userName}
                          </li>
                          <li className="nav-item">
                            <Link
                                to = "/profile"
                                className="active btn btn-primary"
                            >Perfil</Link>
                          </li>
                      </>
                  }
                  <li className="nav-item" style={{marginLeft:"10px", marginRight:"10px"}}>
                    <Link
                        to = "/login"
                        className="active btn btn-primary"
                        onClick={() => {
                            localStorage.removeItem("loggedUserId")
                            localStorage.removeItem("isAthenticated")
                            localStorage.removeItem("userName")
                        }}
                    >Salir</Link>
                  </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent
