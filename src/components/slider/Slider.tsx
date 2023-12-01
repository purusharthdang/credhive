import React, { useState } from 'react';
import { SliderTypes } from './slider.types';



const Slider = ({ min, max, step, onChange, title }: SliderTypes) => {
  const [value, setValue] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col">
    <span className="ml-2">{title}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider-thumb appearance-none w-full rounded-lg h-3 bg-gray-300 outline-none"
      />
    </div>
  );
};

export default Slider;