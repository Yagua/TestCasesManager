import {useState, useEffect} from 'react'

import TesterService from '../service/TesterService'

const TesterComponent = (props) => {
    let [testers, setTesters] = useState(props.testers)

    return (
        <div>
            <div>
            </div>
            <div className="table-responsive custom-table-responsive">
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th className = "text-center">Id</th>
                            <th className = "text-center">Primer Nombre</th>
                            <th className = "text-center">Segundo Nombre</th>
                            <th className = "text-center">Apellido Paterno</th>
                            <th className = "text-center">Apellido Materno</th>
                            <th className = "text-center">Firma</th>
                            {!props.view &&
                            <th className = "text-center">Acciones</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {testers.map((tester, index) => {
                            return (
                                <>
                                    <tr key={`ft-${index}`} className="spacer"><td colSpan="100"></td></tr>
                                    <tr key={index}>
                                        <td>{tester.testerId}</td>
                                        <td>{tester.firstName}</td>
                                        <td>{tester.secondName}</td>
                                        <td>{tester.paternalLastName}</td>
                                        <td>{tester.maternalLastName}</td>
                                        <td>{tester.sing}</td>
                                        <td className = "text-center">
                                            {/*actions for the rows here*/}
                                        </td>
                                    </tr>
                                    <tr key={`fb-${index}`} className="spacer"><td colSpan="100"></td></tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {testers.length === 0 &&
            <p className = "text-center text-muted fst-italic">No Hay Elementos Para Mostrar</p>
            }
        </div>
    );
}

export default TesterComponent
