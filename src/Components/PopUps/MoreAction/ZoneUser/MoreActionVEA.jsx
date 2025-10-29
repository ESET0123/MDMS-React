import React, { useEffect, useRef } from 'react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { VscEye } from 'react-icons/vsc';
import { BiTargetLock } from "react-icons/bi";


export default function MoreactionVEA({ onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      className='w-fit rounded-xl p-3 border border-zinc-200 bg-white shadow-lg z-50'>
        
        <button className='flex items-center gap-2 pb-1'><VscEye />View</button>
        
        <button  className='flex items-center gap-2  pb-1'><MdEdit/> Edit</button>
        
        <button  className='flex items-center gap-2  pb-1 '> <BiTargetLock /> Activate</button>
    </div>
  );
}
