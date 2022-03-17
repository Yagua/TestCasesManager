import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import LoadingComponent from './LoadingComponent'
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

    const getDisableTestCasesCount = () => {
        let disableConter = 0
        user.testCases.map(testCase => {
            if(!testCase.enabled) {
                disableConter++
            }
        })
        return disableConter
    }

    const renderContent = () => {
        if(!isLoaded) return <LoadingComponent />
        return (
            <div>
                <HeaderComponent />
                <div className="alert alert-secondary mt-2 d-flex justify-content-between" role="alert">
                    <div className="h5">
                        @{user.userName}
                    </div>
                    <button type="button" className="btn btn-primary position-relative">
                     Inhabilitados
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {getDisableTestCasesCount()}
                      </span>
                    </button>
                </div>

              <div className="content">
                <div className="m-4">
                  <h2 className = "text-center"> Lista de Casos de Prueba </h2>
                  <Link to = "/add-employee" className = "btn btn-primary mb-3" > Agregar Caso de Prueba </Link>
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
                            user.testCases.map(testCase => {
                                if(testCase.enabled)
                                    return (
                                        <>
                                            <tr className="spacer"><td colspan="100"></td></tr>
                                            <tr scope="row">
                                                <td className="text-center">{testCase.testCaseId}</td>
                                                <td>{testCase.testCaseName}</td>
                                                <td>{testCase.systemModule}</td>
                                                <td>{testCase.testCaseVersion}</td>
                                                <td >{testCase.executionDate}</td>
                                                <td>
                                                    <Link className="btn btn-primary" to="/" >Visualizar</Link>
                                                    <button className = "btn btn-danger" onClick = {() =>{}}
                                                    style = {{marginLeft:"10px"}}>Inhabilitar</button>
                                                </td>
                                            </tr>
                                            <tr className="spacer"><td colspan="100"></td></tr>
                                        </>
                                    );
                            })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        );
    }
    return renderContent();
}

export default HomeComponent;
