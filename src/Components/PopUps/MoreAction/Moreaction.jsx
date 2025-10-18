import React, { useEffect, useRef } from 'react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { VscEye } from 'react-icons/vsc';

export default function Moreaction({ onClose }) {
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
      className='w-fit rounded-xl p-4 border border-zinc-200 bg-white shadow-lg z-50'
    >
      <div className='flex items-center gap-2 mb-2'>
        <VscEye />
        <button>View</button>
      </div>
      <div className='flex items-center gap-2 mb-2'>
        <MdEdit />
        <button>Edit</button>
      </div>
      <div className='flex items-center text-red-500 gap-2'>
        <RiDeleteBinLine color='red' />
        <button>Delete</button>
      </div>
    </div>
  );
}
