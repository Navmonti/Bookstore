import { useEffect } from 'react';
import './App.css'
import AddItem from './components/add/addItem';
import { ListItems } from './components/list/listItems';
import { gerAllBook } from './redux/slices/BookSlice';
import { openModal } from './redux/slices/ModalSlice';
import { useAppDispatch, useAppSelector } from './redux/store/hooks';
import Modal from './toolkit/Modal';
import IModal from './interfaces/IModal';


const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector(state => state)

  const modalProp : IModal = {
    children : <AddItem/>,
    headerTitle : 'Add Book',
    isOpen : true
  }
  
  const _AddHandler = (): any => {
    dispatch(openModal(modalProp))
  }

  const _getAll = ()  => {
    dispatch(gerAllBook())
  }

  useEffect(() => {
    _getAll();
  }, [])

  return (
    <div className="App">
      <Modal />
      <div className='header'>
        <h1>Navmonti BookStore</h1>
      </div>
      <div className='content'>
        <div className='btn-bar'>
          <button className='btn-success btn' onClick={() => _AddHandler()}>Add</button>
        </div>
        <ListItems bookList={store.book.books} />
      </div>
    </div>
  );
}

export default App;
