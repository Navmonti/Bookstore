// Modal.tsx
import React from 'react';
import { closeModal } from '../redux/slices/ModalSlice';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { RootState } from '../redux/store/store';
import './../toolkit/modal.css'
import ModalProps from '../interfaces/IModal';

const Modal  = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state: RootState) => state.modal);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (!modal.isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className='modal-header'>
          <span>{modal.headerTitle}</span>
          <button className="close-button" onClick={handleCloseModal}>
            &times; {/* Render a close icon (e.g., 'x') */}
          </button>
        </div>
        <div className="modal-body">
          {modal.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
