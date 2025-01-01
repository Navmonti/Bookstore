import React from 'react';
import NavbarMobile from './web/webNavbar';
import NavbarDesktop from './mobile/mobileNavbar';
import  useWindowSize  from '../../../hooks/useWindowSize';

const Navbar: React.FC = () => {
    const isMobile = useWindowSize();
    
    return (
        <>
            {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
        </>
    );
};

export default Navbar;