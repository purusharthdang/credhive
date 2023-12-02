import React, { useState } from 'react';
import { ToggleButtonTypes } from './toggleButton.types';



const ToggleButton = ({ onChange, initialValue }: ToggleButtonTypes) => {
    const [checked, setIsChecked] = useState<boolean>(initialValue);
    const handleToggle = (e :React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        onChange(e.target.checked);
    };

    return (
        <label className="flex items-center cursor-pointer">
            <div className="mr-3 text-gray-700 font-medium">Closed</div>
            <div className="relative">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={checked}
                    onChange={(event) => handleToggle(event)}
                />
                <div className={`toggle__line w-10 h-4 ease-out duration-200 rounded-full shadow-inner ${checked ? ' bg-blue-500' : 'bg-gray-300'}`}></div>
                <div className={`toggle__dot absolute ease-out duration-200 w-5 h-5 bg-white rounded-full shadow-md -top-0.5 ${checked ? 'transform translate-x-5 bg-blue-500' : 'bg-gray-300'}`}></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">Active</div>
            
        </label>
    );
};

export default ToggleButton;