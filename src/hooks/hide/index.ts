import {useEffect, useState} from "react";

const useHideState = () => {
    const [hide, setHide] = useState(() => window.innerWidth <= 768);
    const [prevWidth, setPrevWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            if (currentWidth <= 768 && prevWidth > 768) {
                setHide(true);
            } else if (currentWidth > 768 && prevWidth <= 768) {
                setHide(false);
            }
            setPrevWidth(currentWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [prevWidth]);

    return {hide, setHide};
}

export default useHideState