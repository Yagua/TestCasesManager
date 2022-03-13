import { useEffect, useState } from "react";
import testCaseService from "../service/TestCaseService";

let TestCaseListComponent = (props) => {
    let [testCases, setTestCases] = useState([]);

    useEffect(() => {
        testCaseService.getAllTestCases()
            .then(testCases => setTestCases(testCases));
    });

    return (
        <table border="1">
            <thead>
                <th>Campo</th>
                <th>Valor</th>
            </thead>
            <tbody>
                {
                    testCases.map((testCase) => {
                        <tr>{testCase.field}</tr>
                        // <tr>{testCase.field}</tr>
                    })
                }
            </tbody>
        </table>
    );
}

export default TestCaseListComponent;
