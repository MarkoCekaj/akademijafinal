import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { t } from 'react-switch-lang'
import Modal from 'react-bootstrap/Modal'
const ModalDelete = ({ onDelete, name, onBtnClick, titleName }) => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <Button variant="danger" onClick={() => {
                onBtnClick();
                setModalOpen(true);
            }} >
                {t('modalDelete.delete')}
            </Button>
            <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>  {t('modalDelete.delete')} {titleName}?</Modal.Title>
                </Modal.Header>
                <Modal.Body>{t('modalDelete.deleteConfirm')} {name}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalOpen(false)}>
                        {t('modalDelete.close')}
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            onDelete();
                            setModalOpen(false);
                        }}
                    >
                        {t('modalDelete.delete')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
export default ModalDelete;