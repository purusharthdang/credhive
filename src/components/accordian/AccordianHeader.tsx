import React, { useState } from 'react';
import { AccordianTypes } from './accordian.types';


const Accordion = ({ title, children }: AccordianTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-xl mb-4">
      <div
        className="flex justify-between rounded-t-xl items-center px-2 py-2 cursor-pointer select-none bg-blue-600"
        onClick={toggleAccordion}
      >
        <h3 className="text-sm text-white">{title}</h3>
      </div>
      {isOpen && (
        <div className="px-2 py-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;