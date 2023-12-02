import React from 'react'
import ToggleButton from '../toggleButton/ToggleButton'
import Slider from '../slider/Slider'
import DatePicker from '../datePicker/DatePicker'
import { searchAndFilterTypes } from './searchAndFilter.types'

const SearchAndFilter = ({ filters, setFilters }: searchAndFilterTypes) => {

  const handleToggleChange = (checked: boolean) => {
    setFilters((prev) => ({ ...prev, isActive: checked }));
  }

  const handleRangeChange = (rangeValue: number) => {
    setFilters((prev) => ({ ...prev, loanAmount: rangeValue }));
  }

  const handleDateRangeChange = (startDate: Date, endDate: Date) => {
    setFilters((prev) => ({ ...prev, date: { startDate, endDate } }))
  }

  return (
    <div className='flex flex-wrap gap-8 relative w-full p-2'>
      <div className='flex flex-col gap-2 w-64'>
        <label className='text-lg font-semibold'>Loan amount: </label>
        <Slider title='Amount' min={100} max={1000} onChange={handleRangeChange} step={2} currentValue={filters.loanAmount}/>
      </div>
      <div className='flex flex-col gap-2 w-64'>
        <label className='text-lg font-semibold'>Account status: </label>
        <ToggleButton initialValue={filters.isActive} label='Active' onChange={handleToggleChange} />
      </div>

      <div className='flex flex-col gap-2 w-64 flex-wrap'>
        <label className='text-lg font-semibold'>Date range: </label>
        <DatePicker defaultValue={filters.date} onDateRangeChange={handleDateRangeChange} />
      </div>

    </div>
  )
}

export default SearchAndFilter