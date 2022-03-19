import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import LoadingComponent from './LoadingComponent'
import TestCasesListComponent from './TestCasesListComponent'
import UserService from '../service/UserService'

const HomeComponent = () => {
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
    }, [user.testCases])

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <div className = "sticky-top bg-light">
                    <HeaderComponent />
                    <div className="alert alert-secondary mt-2 d-flex justify-content-between" role="alert">
                        <div className="h5">
                            @{user.userName}
                        </div>
                        <Link
                            type="button"
                            className="btn btn-primary position-relative"
                            to = "/disabled-testcases"
                          ><i className="bi bi-trash h4"></i>
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {user.testCases.filter((element) => !element.enabled).length}
                          </span>
                        </Link>
                    </div>
                </div>
                <TestCasesListComponent testCases={
                    user.testCases.filter((element) => element.enabled)
                  }
                />
            </div>
        );
    }
    return renderContent();
}

export default HomeComponent;
