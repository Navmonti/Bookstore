import React, { useState } from "react";
import logo from '../../../../files/images/logo-transparent.png';
import { CiMenuBurger } from "react-icons/ci";
import "./mobileStyle.css"

export const MobileNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const handlerToggel = () => {
        setIsOpen(!isOpen)
    }








    return (
        <nav className="navbar-mobile">
            <button className="navbar-toggle" onClick={() => handlerToggel()}>
                <CiMenuBurger onClick={() => handlerToggel()} />
            </button>
            <div className="log-mobile">
                <img src={logo} alt="Bookstore Logo" />
               
            </div>
            <div className="login-mobile">
                <button className="btn-nav-mobile btn-login-mobile">
                    Login
                </button>
            </div>
            {
                isOpen ? <div className="menuItems-mobile">
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
                </div> : <></>
            }
           
          
        </nav>
    )
}

export default MobileNavbar;
