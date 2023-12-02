import React, { useState } from 'react';
import { SliderTypes } from './slider.types';



const Slider = ({ min, max, step, onChange, title, currentValue }: SliderTypes) => {
  const [value, setValue] = useState(currentValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col">
      <div className='flex items-center'>
        <span className="mr-2">{value}</span>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="slider-thumb appearance-none w-full rounded-lg h-4 bg-gray-300 outline-none"
        />
        <span className="ml-2">{max}</span>
      </div>
    </div>
  );
};

export default Slider;