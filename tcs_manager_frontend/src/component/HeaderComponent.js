import { useState, useEffect } from 'react'

const HeaderComponent = (props) => {
    return (
        <div>
            <nav className = "navbar navbar-dark bg-dark">
                <h3 className="navbar-brand justify-content-start"
                    style={{marginLeft:"20px"}}
                >{props.onProfile ? "Perfil de Usuario" : "Gestor de Casos de Pruebas"}</h3>
                <ul className="nav">
                  {props.onProfile ?
                      <li className="nav-item">
                        <a className="active btn btn-primary" href="#">Atras</a>
                      </li> :
                      <li className="nav-item">
                        <a className="active btn btn-primary" href="#">Perfil</a>
                      </li>
                  }
                  <li className="nav-item" style={{marginLeft:"10px", marginRight:"10px"}}>
                    <a className="active btn btn-primary" href="#">Salir</a>
                  </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent
