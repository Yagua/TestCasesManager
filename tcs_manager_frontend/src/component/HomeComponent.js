import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import LoadingComponent from './LoadingComponent'
import TestCasesListComponent from './TestCasesListComponent'
import UserService from '../service/UserService'
import ModalMessageComponent from './ModalMessageComponent'

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
                    <HeaderComponent userName = {user.userName}/>
                </div>
                <TestCasesListComponent testCases={
                    user.testCases.filter((element) => element.enabled)
                  }
                />
                <ModalMessageComponent
                    modalTitle  = {<h4>hola</h4>}
                    modalBody = {"hola mundo"}
                />
            </div>
        );
    }
    return renderContent();
}

export default HomeComponent;
