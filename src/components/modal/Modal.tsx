import React from 'react';
import { ModalTypes } from './modal.types';



const Modal = ({ isOpen, onClose, onApply, onCancel, children }: ModalTypes) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 w-96 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div>{children}</div>
        <div className="flex justify-end mt-4">
          {onCancel && <button
            onClick={onCancel}
            className="px-4 py-2 bg-slate-100 text-red rounded mr-2"
          >
            Cancel
          </button>}
          {onApply && <button
            onClick={onApply}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Apply
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;