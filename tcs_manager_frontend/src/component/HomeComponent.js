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
    }, [])

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <div className = "sticky-top bg-light">
                    <HeaderComponent userName = {user.userName} onHome = {true}/>
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
