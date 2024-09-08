import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { closeModal } from '../../redux/slices/ModalSlice';
import { IBook } from '../../interfaces/IBook';
import { addBook } from '../../redux/slices/BookSlice';
 

const AddItem: React.FC<any> = ({ }) => {
  const state = useAppSelector(state => state.book.books)
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleCancel = () => {
    dispatch(closeModal())
  }
  
  const handleAddItem = () => { 
    const maxId = state.reduce((max, obj) => (obj.id > max ? obj.id : max), 0);
    const book: IBook = {
      id: maxId + 1,
      title: title,
      category: category,
      price: parseInt(price),
      description: description,
      createdDate: new Date().toDateString()
    }
    dispatch(addBook(book))
    dispatch(closeModal())
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
          onChange={(e) => setPrice(e.target.value)}
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
        <button type="button" className="btn btn-success" onClick={() => handleAddItem()}>
          Add
        </button>
        <button type="button" className="btn btn-cancel" onClick={() => handleCancel()}>
          Close
        </button>
      </div>
    </form>
  );
};

export default AddItem;