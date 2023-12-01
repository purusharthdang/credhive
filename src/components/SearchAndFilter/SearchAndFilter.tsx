import React from 'react'

const SearchAndFilter = () => {
  return (
    <div className='relative'>
        <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md py-1 px-4 pr-10 focus:outline-none focus:border-blue-500 w-full"
      />
    </div>
  )
}

export default SearchAndFilter