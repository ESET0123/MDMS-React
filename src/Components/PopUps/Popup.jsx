import React from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';

export default function Popup({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <HiX className="w-6 h-6" />
        </button>
        
        {/* Content */}
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}