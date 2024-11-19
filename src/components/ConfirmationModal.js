
import React from 'react';
import './todo/Todo.css';
import Button from './Button';
import Modal from './Modal';

export const ConfirmationModal = ({ title }) => {
    return (
        <>

            {/* Confimation Modal */}
            <Modal
                open={true}
                heading={"Delete Confirmation Modal"}
                footerComponent={<div className='delete-modal-buttons'>
                    <Button>Close</Button>
                    <Button className={"btn-error"}>Delete</Button>
                </div>}
            >
                Are you sure you want to delete {title}?
            </Modal>
        </>
    )
}