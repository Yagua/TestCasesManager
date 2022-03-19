import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import UserService from '../service/UserService';
import LoadingComponent from './LoadingComponent';

const TestCasesListComponent = (props) => {
    let [user, setUser] = useState({});
    let [isLoaded, setIsLoaded] = useState(false);
    let userId = localStorage.getItem("loggedUserId");
    let navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("isAthenticated")) navigate("/login")
        UserService.getUserById(userId)
            .then((user) => {
                setUser(user);
                setIsLoaded(true);
            })
    }, [])

    const enableOrDisableTestCase = (enable) => {
        if(enable) {
        }
    }

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
              <div className="content">
                <div className="m-4">
                  <h2 className = "text-center display-5 my-3"> {props.title ? props.title : "Lista de Casos de Prueba"} </h2>
                  { !props.disabledTestCases &&
                      <Link to = "/add-testcase" className = "btn btn-primary mb-3" > Agregar Caso de Prueba </Link>
                  }
                  <div className="table-responsive custom-table-responsive">
                    <table className="table custom-table">

                      <thead>
                        <tr>
                          <th scope="col"> Caso De Uso Id </th>
                          <th scope="col"> Nombre </th>
                          <th scope="col"> Modulo del Systema </th>
                          <th scope="col"> Version </th>
                          <th scope="col"> Fecha de Ejecicion</th>
                          <th scope="col"> Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            props.testCases.map(testCase => {
                                return (
                                    <>
                                        <tr key="fs-01" className="spacer"><td colSpan="100"></td></tr>
                                        <tr key={testCase.testCaseId} scope="row" onClick={(e)=>console.log(e)}>
                                            <td className="text-center">{testCase.testCaseId}</td>
                                            <td>{testCase.testCaseName}</td>
                                            <td>{testCase.systemModule}</td>
                                            <td>{testCase.testCaseVersion}</td>
                                            <td >{testCase.executionDate}</td>
                                            { props.disabledTestCases ?
                                                <td>
                                                    <button className = "btn btn-success" onClick = {() =>{}}
                                                    style = {{marginLeft:"10px"}}>Habilitar</button>
                                                    <button className = "btn btn-danger" onClick = {() =>{}}
                                                    style = {{marginLeft:"10px"}}>Eliminar</button>
                                                </td>
                                                 :
                                                <td>
                                                    <Link className="btn btn-primary" to="/" >Visualizar</Link>

                                                    <button className = "btn btn-danger" onClick = {(e) =>{}}
                                                    style = {{marginLeft:"10px"}}>Inhabilitar</button>
                                                </td>
                                            }
                                        </tr>
                                        <tr key="fs-02" className="spacer"><td colSpan="100"></td></tr>
                                    </>
                                );
                            })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
        );
    }

    return renderContent()
}

export default TestCasesListComponent
