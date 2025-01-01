import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const [isMobile, setIsMobile] = useState(window.innerWidth > 768);
    const handleResize = () => {
        setIsMobile(window.innerWidth > 768); // Assume < 768px is mobile
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}