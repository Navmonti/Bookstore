/* eslint-disable jsx-a11y/img-redundant-alt */
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
import banner from './files/images/bannerimage.jpg'
import aboutImg from './files/images/aboutme.png' 
import WebNavbar from './components/shared/webNavbar';


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
          <WebNavbar/>

          <section id="banner" className="banner section">
              <div className="banner-text">
                  <p><span>W</span>elcome to your <h1>Bookstore</h1></p>
                  <p>Find your next great read!</p>
                  <p>You can make book list for yourself and leave comment on them</p>
              </div>
              <div className="banner-image">
                  <div className="banner-image-cover"></div>
                  <img src={banner} alt="banner image"></img>   
              </div>
          </section>

          <section id="about" className="about section">
              <div className="about-text">
                  <p>A bookstore serves as a hub for knowledge, imagination, and cultural exchange, offering readers access to a vast array of literature across genres. Its primary aim is to foster a love of reading, provide educational resources, and inspire curiosity. Bookstores often strive to create a community space where individuals can explore new ideas, deepen their understanding of the world, and find personal enjoyment through books. In addition, they aim to support authors and publishers, promote literacy, and offer readers both a physical and intellectual sanctuary for learning and relaxation.</p>
              </div>
              <div className="about-image">
                  <img src={aboutImg} alt="about image"></img>  
              </div>
          </section>

          <section id="bookList" className="bookList">
              <div className='content'>
                  <div className='btn-bar'>
                      <button className='btn-success btn' onClick={() => AddHandler()}>Add</button>
                  </div>
                  <ListItems bookList={state.book.books} />
              </div>
          </section>
    </div>
  );
}

export default App;
