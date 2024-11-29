import React, { useEffect } from 'react';

const LenisScroll = ({ children }) => {
    useEffect(() => {
        // Initialize Lenis with minimal configuration
        const lenis = new window.Lenis();

        // Animation frame loop for Lenis
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Cleanup on component unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisScroll;
