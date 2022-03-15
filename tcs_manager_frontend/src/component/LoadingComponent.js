const LoadingComponent = (props) => {
    return (
        <div>
            <nav className = "navbar navbar-dark bg-dark">
               <h3 className="navbar-brand"
                   style={{marginLeft:"20px"}}
               >Cargando...</h3>
            </nav>
            <div style={{marginTop: "10%"}}>
                <div className="spinner-border text-muted mx-auto d-block"
                     role="status"
                     style={{width:"250px", height:"250px"}}
                >
                  <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    );
}

export default LoadingComponent
