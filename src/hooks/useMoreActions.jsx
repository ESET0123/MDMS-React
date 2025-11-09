import { useState, useRef, useEffect } from 'react';

export const useMoreActions = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null);

    const handleButtonClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({ top: rect.bottom, left: rect.left });
        setIsVisible((prev) => !prev);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target) && isVisible) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isVisible]);

    return {
        isVisible,
        position,
        handleButtonClick,
        handleClose,
        buttonRef
    };
};
