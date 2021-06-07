import React from 'react'
import { Modal } from 'react-bootstrap'
const ModalComponent = ({
    title = <></>,
    children = <></>,
    footer = null,
    modalOpen,
    setModalOpen
}) => {
    return (
        <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
            <Modal.Header>
                {title}
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            {footer && <Modal.Footer>{footer}</Modal.Footer>}
        </Modal>
    )
}
export default ModalComponent;
