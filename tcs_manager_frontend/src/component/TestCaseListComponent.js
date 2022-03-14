import { useEffect, useState } from "react";
import TestCaseService from "../service/TestCaseService";

const TestCaseListComponent = (props) => {
    let [testCases, setTestCases] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        TestCaseService.getAllTestCases()
            .then(testCases => {
                setTestCases(testCases)
                setIsLoaded(true);
            }).catch(error => console.log(error));
    }, []);

    const renderContent = () => {
        if(!isLoaded) return <></>
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        testCases.map((testCase) => 
                            <tr key = {testCase.testCaseId}>
                                <td>{testCase.testCaseId}</td>
                                <td>{testCase.testCaseName}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }

    return renderContent()
}

export default TestCaseListComponent;
