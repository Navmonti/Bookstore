import React from 'react';
import { IBook } from '../../interfaces/IBook';
import { useAppDispatch } from '../../redux/store/hooks';
import { closeModal } from '../../redux/slices/ModalSlice';

const DeleteItem: React.FC<{ book: IBook }> = ({ book }) => {
    const dispatch = useAppDispatch();
    const handleCancel = () => {
        dispatch(closeModal())
    }

    const handleDeleteItem = () => {

    };

    return <form>
        <div className="form-group">
            <label className='input-label'>Title:</label>
            <input
                className='input-field'
                type="text"
                value={book.title}
                disabled
            />
        </div>
        <div className="form-group">
            <label className='input-label'>Price:</label>
            <input
                className='input-field'
                type="number"
                value={book.price}
                disabled
            />
        </div>
        <div className="form-group">
            <label className='input-label'>Category:</label>
            <input
                className='input-field'
                type="text"
                value={book.category}
                disabled
            />
        </div>
        <div className="form-group">
            <label className='input-label'>Description:</label>
            <textarea
                className='input-field'
                value={book.description}
                disabled
            />
        </div>
        <div className="button-container">
            <button type="button" className="btn btn-error" onClick={() => handleDeleteItem()}>
                Delete
            </button>
            <button type="button" className="btn btn-cancel" onClick={() => handleCancel()}>
                Close
            </button>
        </div>
    </form>

}

export default DeleteItem;