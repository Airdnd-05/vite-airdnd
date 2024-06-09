import React, { useState } from 'react';
import Modal from 'react-modal';
import CommentForm from './commentForm.jsx';

// 모달 설정
Modal.setAppElement('#root');

// CommentModal 컴포넌트 정의
const CommentModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // 모달 열기 함수
    const openModal = () => setModalIsOpen(true);
    // 모달 닫기 함수
    const closeModal = () => setModalIsOpen(false);

    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">Add Comment</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Comment"
                className="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-75"
                overlayClassName="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-75"
            >
                <div className="bg-white rounded-lg p-5 w-full max-w-lg mx-auto shadow-lg overflow-y-auto max-h-screen">
                    <CommentForm
                        submittedData={submittedData}
                        setSubmittedData={setSubmittedData}
                        editIndex={editIndex}
                        setEditIndex={setEditIndex}
                        closeModal={closeModal}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default CommentModal;
