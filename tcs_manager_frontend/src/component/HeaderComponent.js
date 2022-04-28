import {Link} from 'react-router-dom'

const HeaderComponent = (props) => {
    return (
        <div className="sticky-top">
            <nav className = "navbar navbar-dark bg-dark">
                <h3 className="navbar-brand justify-content-start mx-3"
                >{props.navBarBrand ? props.navBarBrand : "Gestor de Casos de Pruebas"}</h3>

                <ul className="nav mx-3">
                  {props.onHome &&
                    <li className="nav-item text-white m-2 h5">
                      @{props.userName}
                    </li>
                  }

                    <div className="dropdown">
                      <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Opciones
                      </button>

                      <ul className="dropdown-menu dropdown-menu-sm-end">
                      {!props.onHome ?
                        <li>
                            <Link
                                to = "/home"
                                className="dropdown-item"
                            >Atras</Link>
                        </li>
                      :
                          <>
                            <li>
                                <Link
                                    to = "/profile"
                                    className="dropdown-item"
                                >Perfil</Link>
                            </li>
                          </>
                      }
                          <li>
                            <Link
                                to = "/login"
                                className="dropdown-item"
                                onClick={() => {
                                    localStorage.removeItem("loggedUserId")
                                    localStorage.removeItem("isAthenticated")
                                    localStorage.removeItem("userName")
                                }}
                            >Salir</Link>
                          </li>
                      </ul>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent
