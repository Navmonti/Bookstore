import { useEffect } from 'react';
import './App.css'
import AddItem from './components/add/addItem';
import { ListItems } from './components/list/listItems';
import { gerAllBook } from './redux/slices/BookSlice';
import { openModal } from './redux/slices/ModalSlice';
import { useAppDispatch, useAppSelector } from './redux/store/hooks';
import Modal from './toolkit/modal/Modal';
import IModal from './interfaces/IModal';


const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state)

  const modalProp: IModal = {
    children: <AddItem />,
    headerTitle: 'Add Book',
    isOpen: true
  }

  const AddHandler = (): any => {
    dispatch(openModal(modalProp))
  }

  const GetAllBooks = () => {
    dispatch(gerAllBook())
  }

  useEffect(() => {
    GetAllBooks();
  }, [])

  return (
    <div className="App">
      <Modal />
      <div className='content'>
        <div className='btn-bar'>
          <button className='btn-success btn' onClick={() => AddHandler()}>Add</button>
        </div>
        <ListItems bookList={state.book.books} />
      </div>
    </div>
  );
}

export default App;
