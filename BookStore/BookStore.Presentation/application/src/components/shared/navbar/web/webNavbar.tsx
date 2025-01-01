/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"; 
import logo from '../../../../files/images/logo-transparent.png';
import "./webStyle.css"

export const WebNavbar: React.FC = () => {
    return (
        <nav className="navbar-web">
            <div className="log">
                <img src={logo} alt="Bookstore Logo" />
            </div>
            <div className="menuItems">
                <a className="navbaritem font-md" href="#">
                    Home
                </a>
                <a className="navbaritem font-md" href="#">
                    About Us
                </a>
                <a className="navbaritem font-md" href="#">
                    Contact Us
                </a>
                <a className="navbaritem font-md" href="#">
                    Books
                </a>
                <a className="navbaritem font-md" href="#">
                    Order
                </a>
            </div>
            <div className="login">
                <button className="btn-nav btn-login font-md">
                    Login
                </button>
                <button className="btn-nav btn-signup font-md">
                    Signup
                </button>
            </div>
        </nav>
    )
}

export default WebNavbar;
