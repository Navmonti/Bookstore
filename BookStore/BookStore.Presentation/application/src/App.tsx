/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import './App.css'
import './general.css'
import AddItem from './components/add/addItem';
import { ListItems } from './components/list/listItems';
import { gerAllBook } from './redux/slices/BookSlice';
import { openModal } from './redux/slices/ModalSlice';
import { useAppDispatch, useAppSelector } from './redux/store/hooks';
import Modal from './toolkit/modal/Modal';
import IModal from './interfaces/IModal';
import banner from './files/images/bannerimage.jpg'
import aboutImg from './files/images/logo.png'
import Navbar from './components/shared/navbar/Navbar';
import { Col, Container, Row } from 'react-bootstrap';


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
            <Navbar />
            <Container id="banner" className="banner section">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="banner-text font-lg">
                            <p className="font-lg"><span>W</span >Welcome to your <h1 className="font-lg">Bookstore</h1></p>
                            <p className="font-md">Find your next great read!</p>
                            <p className="font-sm">You can make book list for yourself and leave comment on them</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="banner-image">
                            <div className="banner-image-cover"></div>
                            <img src={banner} alt="banner image"></img>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container id="about" className="about section">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="about-image">
                            <img src={aboutImg} alt="about image"></img>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="about-text">
                            <p>A bookstore serves as a hub for knowledge, imagination, and cultural exchange, offering readers access to a vast array of literature across genres. Its primary aim is to foster a love of reading, provide educational resources, and inspire curiosity. Bookstores often strive to create a community space where individuals can explore new ideas, deepen their understanding of the world, and find personal enjoyment through books. In addition, they aim to support authors and publishers, promote literacy, and offer readers both a physical and intellectual sanctuary for learning and relaxation.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid id="bookList" className="bookList">
                <div className='content'>
                    <div className='btn-bar'>
                        <button className='btn-success btn' onClick={() => AddHandler()}>Add</button>
                    </div>
                    <ListItems bookList={state.book.books} />
                </div>
            </Container>
        </div>
    );
}

export default App;
