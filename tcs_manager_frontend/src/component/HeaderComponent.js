import {Link} from 'react-router-dom'

const HeaderComponent = (props) => {
    return (
        <div className="sticky-top">
            <nav className = "navbar navbar-dark bg-dark">
                <h3 className="navbar-brand justify-content-start mx-3"
                >{props.navBarBrand ? props.navBarBrand : "Test Case Manager"}</h3>

                <ul className="nav mx-3">
                  {props.onHome &&
                    <li className="nav-item text-white m-2 h5">
                      @{props.userName}
                    </li>
                  }

                    <div className="dropdown">
                      <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Options
                      </button>

                      <ul className="dropdown-menu dropdown-menu-sm-end">
                      {!props.onHome ?
                        <li>
                            <Link
                                to = "/home"
                                className="dropdown-item"
                            >Back</Link>
                        </li>
                      :
                          <>
                            <li>
                                <Link
                                    to = "/profile"
                                    className="dropdown-item"
                                >Profile</Link>
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
                            >Log Out</Link>
                          </li>
                      </ul>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderComponent
