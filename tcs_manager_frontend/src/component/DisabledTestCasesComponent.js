import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import LoadingComponent from './LoadingComponent'
import TestCasesListComponent from './TestCasesListComponent'
import HeaderComponent from './HeaderComponent'
import UserService from '../service/UserService'

const DisabledTestCasesComponent = () => {
    let [user, setUser] = useState({});
    let [disabledTestCases, setDisabledTestCases] = useState([])
    let [isLoaded, setIsLoaded] = useState(false);
    let userId = localStorage.getItem("loggedUserId");

    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")
        UserService.getUserById(userId)
            .then((user) => {
                setUser(user);
                setIsLoaded(true);
                setDisabledTestCases(user.testCases.filter(
                    (element) => !element.enabled))
            })
    }, [])


    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <HeaderComponent onProfile={true}/>
                <TestCasesListComponent
                    testCases={disabledTestCases}
                    disabledTestCases={true}
                    title = "Casos de Prueba Inhabilitados"
                />
            </div>
        );
    }

    return renderContent()
}

export default DisabledTestCasesComponent
