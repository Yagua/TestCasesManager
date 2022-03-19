import { useNavigate } from 'react-router-dom'

import TestCasesListComponent from './TestCasesListComponent'
import HeaderComponent from './HeaderComponent'

const DisabledTestCasesComponent = () => {
    const navigate = useNavigate()

    const renderContent = () => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")
        return (
            <div>
                <HeaderComponent onProfile={true}/>
                <TestCasesListComponent
                    disabledTestCases={true}
                    title = "Casos de Prueba Inhabilitados"
                />
            </div>
        );
    }

    return renderContent()
}

export default DisabledTestCasesComponent
