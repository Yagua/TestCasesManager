import {useEffect, useState, useContext} from "react";
import AuthService from '../service/AuthService'
import {useNavigate, Link} from 'react-router-dom'

const LoginComponent = (props) => {
    let [userName, setUserName] = useState('')
    let [userPassword, setUserPassword] = useState('')
    let [userFound, setUserFound] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("isAthenticated")) navigate("/home")
    }, []);

    const findUser = (e) => {
        e.preventDefault()
        AuthService.loginUser(userName, userPassword)
            .then(userData => {
                localStorage.setItem("loggedUserId", userData.userId)
                localStorage.setItem("isAthenticated", true)
                localStorage.setItem("userName", userData.userName)
                setUserFound(true)
                navigate(`/home`)
            }).catch(error => {
                setUserFound(false)
                console.error(error)
            });
    }

    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <h2 style={{color: "White", margin: "auto"}}>System Login</h2>
                </nav>
            </header>
            <br/>
            <div className="container">
            </div>
            <br/>
            <div className="card col-md-6 offset-md-3">
                <div className = "card-body border">
                    {!userFound &&
                    <div className="alert alert-danger"> User Not Found </div>
                    }
                    <form>
                      <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange = {(e) => setUserName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userPassword" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange = {(e) => setUserPassword(e.target.value)}
                        />
                      </div>
                      <button
                            type="submit"
                            className="btn btn-primary mb-3"
                            onClick = {(e) => findUser(e)}
                      >Login</button>
                      <Link
                            to="/user-register"
                            type="submit"
                            className="btn btn-success mb-3 mx-2"
                      >Create User</Link>
                    </form>
                    <Link to="/updatepassword"> you forgot the password? </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent
