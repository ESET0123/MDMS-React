import React, { useRef } from 'react';
import { useMoreActions } from '../../../../hooks/useMoreActions';
import Moreaction from '../../../PopUps/MoreAction/EnterpriseUser/Moreaction';
import MoreactionVEA from '../../../PopUps/MoreAction/ZoneUser/MoreactionVEA';
import MoreactionEAR from '../../../PopUps/MoreAction/ZoneUser/MoreactionEAR';
import { IoMdMore } from 'react-icons/io';

export default function MoreActionButton() {
    const { isVisible, position, handleButtonClick, handleClose } = useMoreActions();
    const buttonRef = useRef(null);
    
    const handleMoreActionClick = (e) => {
        handleButtonClick(e);
    };

    return (
        <div className="space-x-2 flex justify-center relative">
            <button
                ref={buttonRef}
                onClick={handleMoreActionClick}
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full p-1 transition-colors duration-200"
            >
                <IoMdMore />
            </button>
            {isVisible && (
                <div style={{ top: position.top, left: position.left }} className="fixed z-10">
                    {/* <Moreaction onClose={handleClose} /> */}
                    {/* <MoreactionVEA onClose={handleClose} /> */}
                    <MoreactionEAR onClose={handleClose} />
                </div>
            )}
        </div>
    );
}
