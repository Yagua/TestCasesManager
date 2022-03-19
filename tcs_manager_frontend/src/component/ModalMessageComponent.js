import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

const ModalMessageComponent = (props) => {
    let [isOpen, setIsOpen] = useState(true)
    const {modalTitle, modalBody, modalFooter } = props

    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <Modal show = {isOpen} onHide={toggleModal}>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalBody>{modalBody}</ModalBody>
            <ModalFooter>
                <button
                    className="btn btn-secondary"
                    onClick = {toggleModal}
                >Cerrar</button>
                <button className="btn btn-primary">Aceptar</button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalMessageComponent
