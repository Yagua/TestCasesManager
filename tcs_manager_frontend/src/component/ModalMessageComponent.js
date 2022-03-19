const ModalMessageComponent = (props) => {
    return (
        <div className="modal" id="modal-window" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                {
                    props.modalTitle ? props.modalTitle : "Modal Title"
                }
                </h5>
              </div>
              <div className="modal-body">
                <p>
                {
                    props.modalBody ? props.modalBody : "Modal body here"
                }
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary"
                    onClick = {() => {props.modalObject.hide()}}
                >{props.closeButtonTitle ? props.closeButtonTitle : "Cerrar"}</button>

                {!props.isAlert &&
                <button type="button" className="btn btn-primary"
                    onClick = {() => props.acceptButtonProperties.callbackAction() }
                >{props.acceptButtonProperties.buttonTitle}</button>
                }
              </div>
            </div>
          </div>
        </div>
    );
}

export default ModalMessageComponent
