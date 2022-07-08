import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

const ModalComponent = (props) => {
    return (
        <Modal
            show = {props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader>{props.modalTitle}</ModalHeader>
            <ModalBody>{props.modalBody}</ModalBody>
            <ModalFooter>
                <button
                    className="btn btn-secondary"
                    onClick = {props.closeAction()}
                >Exit</button>
            {!props.isAlert &&
                <button
                    className="btn btn-primary"
                    onClick = {() => props.onConfirm()}
                >Accept</button>
            }
            </ModalFooter>
        </Modal>
    );
}

export default ModalComponent
