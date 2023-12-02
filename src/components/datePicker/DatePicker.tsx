import React, { useState } from 'react';
import { DatePickerTypes } from './datepicker.types';
import { oneMonthAgo, today } from '../../constants';


const DatePicker = ({ onDateRangeChange, defaultValue }: DatePickerTypes) => {
  const [startDate, setStartDate] = useState(oneMonthAgo);
  const [endDate, setEndDate] = useState(today);

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = new Date(event.target.value);
    setStartDate(newStartDate);
    onDateRangeChange(newStartDate, endDate);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = new Date(event.target.value);
    setEndDate(newEndDate);
    onDateRangeChange(startDate, newEndDate);
  };

  return (
    <div className="flex gap-2 items-center content-center flex-wrap">
      <div>
        <label htmlFor="start-date" className="mr-2">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate.toISOString().split('T')[0]}
          onChange={handleStartDateChange}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="end-date" className="mr-2">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate.toISOString().split('T')[0]}
          onChange={handleEndDateChange}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default DatePicker;