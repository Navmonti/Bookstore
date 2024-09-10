/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import './App.css'
import AddItem from './components/add/addItem';
import { ListItems } from './components/list/listItems';
import { gerAllBook } from './redux/slices/BookSlice';
import { openModal } from './redux/slices/ModalSlice';
import { useAppDispatch, useAppSelector } from './redux/store/hooks';
import Modal from './toolkit/modal/Modal';
import IModal from './interfaces/IModal';
import logo from './files/images/logo.png'
import banner from './files/images/bannerimage.jpg'


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
    //dispatch(gerAllBook())
  }

  useEffect(() => {
    GetAllBooks();
  }, [])

  return (
    <div className="App">
          <Modal />
          <nav className="navbar-web">
              <div className="log">
                  <img src={logo} alt="Bookstore Logo" />
              </div>
              <div className="menuItems">
                  <a className="navbaritem" href="#">
                      Home
                  </a>
                  <a className="navbaritem" href="#">
                      About Us
                  </a>
                  <a className="navbaritem" href="#">
                      Contact Us
                  </a>
                  <a className="navbaritem" href="#">
                      Books
                  </a>
                  <a className="navbaritem" href="#">
                      Order
                  </a>
              </div>
              <div className="login">
                  <button className="btn-nav btn-login">
                    Login
                  </button>
                  <button className="btn-nav btn-signup">
                    Signup
                  </button>
              </div>
          </nav>
          <section id="banner" className="banner">
              <div className="banner-text">
                  <p><span>W</span>elcome to your <h1>Bookstore</h1></p>
                  <p>Find your next great read!</p>
              </div>
              <div className="banner-image">
                  <img src={banner} alt="banner image"/> 
              </div>
          </section>
      {/*<div className='content'>*/}
      {/*  <div className='btn-bar'>*/}
      {/*    <button className='btn-success btn' onClick={() => AddHandler()}>Add</button>*/}
      {/*  </div>*/}
      {/*  <ListItems bookList={state.book.books} />*/}
      {/* </div>*/}
    </div>
  );
}

export default App;
