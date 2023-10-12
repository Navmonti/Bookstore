import React, { useState } from 'react';
import { IBook } from '../../interfaces/IBook';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { closeModal } from '../../redux/slices/ModalSlice';

const EditItem : React.FC<{book : IBook}> = ({book}) => {  
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);

  const handleCancel = () => {
    dispatch(closeModal())
  }

  const handleEditItem = () => {
    setTitle('');
    setPrice(0);
    setCategory('');
    setDescription('');
  };

  return (
    <form>
    <div className="form-group">
      <label className='input-label'>Title:</label>
      <input
        className='input-field'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label className='input-label'>Price:</label>
      <input
        className='input-field'
        type="number"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
        required
      />
    </div>
    <div className="form-group">
      <label className='input-label'>Category:</label>
      <input
        className='input-field'
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label className='input-label'>Description:</label>
      <textarea
        className='input-field'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </div>
    <div className="button-container">
      <button type="button" className="btn btn-warning" onClick={() => handleEditItem()}>
        Edit
      </button>
      <button type="button" className="btn btn-cancel" onClick={() => handleCancel()}>
        Close
      </button>
    </div>
  </form>
  );
};

export default EditItem;