import { useNavigate } from 'react-router-dom'

import TestCasesListComponent from './TestCasesListComponent'
import HeaderComponent from './HeaderComponent'

const DisabledTestCasesComponent = () => {
    const navigate = useNavigate()

    const renderContent = () => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")
        return (
            <div>
                <HeaderComponent onHome={false}/>
                <TestCasesListComponent
                    disabledTestCases={true}
                    title = "Disabled Test Cases"
                />
            </div>
        );
    }

    return renderContent()
}

export default DisabledTestCasesComponent
