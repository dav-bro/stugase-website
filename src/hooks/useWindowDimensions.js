import { useState, useEffect } from 'react';



function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    let breakpoint = "xs";

    if (width >= 1600) {
        breakpoint = "xxl";
    } else if ( width >= 1200) {
        breakpoint = "xl";
    } else if ( width >= 992) {
        breakpoint = "lg";
    } else if ( width >= 768) {
        breakpoint = "md";
    } else if ( width >= 576) {
        breakpoint = "sm";
    } else if ( width < 576) {
        breakpoint = "xs";
    }

    return {
        width,
        height,
        breakpoint
    };
}

export default function useWindowDimensions() {
    // if (typeof window !== 'undefined') {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    // }
}