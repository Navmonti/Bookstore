import React, { useState } from 'react'; 

interface AddItemProps {
   
}

const AddItem: React.FC<AddItemProps> = ({  }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = () => { 

    // Clear the input fields
    setTitle('');
    setPrice('');
    setCategory('');
    setDescription('');

  };

  return (
    <>
      <h2>Add a Book</h2>
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
          <button type="button" onClick={handleAddItem}>
            Add Book
          </button> 
        </div>
      </form>
    </>
  );
};

export default AddItem;