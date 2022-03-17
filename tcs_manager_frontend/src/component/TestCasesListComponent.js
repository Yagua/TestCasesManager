import {Link} from 'react-router-dom'

const TestCasesListComponent = (props) => {
    return (
          <div className="content">
            <div className="m-4">
              <h2 className = "text-center"> {props.title ? props.title : "Lista de Casos de Prueba"} </h2>
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
                                    <tr className="spacer"><td colspan="100"></td></tr>
                                    <tr scope="row">
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
                                                <button className = "btn btn-danger" onClick = {() =>{}}
                                                style = {{marginLeft:"10px"}}>Inhabilitar</button>
                                            </td>
                                        }
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
    );
}

export default TestCasesListComponent
