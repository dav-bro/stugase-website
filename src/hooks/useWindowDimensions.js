import { useState, useEffect } from 'react';



function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    let breakpoint = "sm";

    if (width >= 1280) {
        breakpoint = "xl";
    } else if ( width >= 1024) {
        breakpoint = "lg";
    } else if ( width >= 768) {
        breakpoint = "md";
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
   /* } else {
        return {
            breakpoint: null
        }
    }*/
}
