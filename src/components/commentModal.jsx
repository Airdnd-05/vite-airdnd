// commentModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import CommentForm from './commentForm.jsx';

Modal.setAppElement('#root');

const CommentModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">Add Comment</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Comment"
                className="modal"
                overlayClassName="overlay"
            >
                <CommentForm
                    submittedData={submittedData}
                    setSubmittedData={setSubmittedData}
                    editIndex={editIndex}
                    setEditIndex={setEditIndex}
                    closeModal={closeModal}
                />
            </Modal>
        </div>
    );
};

export default CommentModal;
