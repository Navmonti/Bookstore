import React from "react"; 
import logo from '../../files/images/logo.png';

export const WebNavbar: React.FC = () => {
    return (
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
    )
}

export default WebNavbar;
