import React from 'react'
import { DashboardHeaderTypes } from './dashboardHeader.types'


const DashboardHeader = ({resetFilters, searchText, setIsFilterPanelOpen, setSearchText, isFilteredResults }: DashboardHeaderTypes) => {
    return (
        <div className='flex justify-center py-2 px-2 lg:gap-4 sm:gap-2'>
            <div className='flex flex-col gap-2 w-64'>
                <input
                    type="text"
                    value={searchText}
                    placeholder="Search by company name..."
                    className="border border-gray-300 rounded-md py-1 px-4 pr-10 focus:outline-none focus:border-blue-500"
                    onChange={(event) => setSearchText(event.target.value)}
                />
            </div>
            <button
                onClick={() => setIsFilterPanelOpen(true)}
                className="px-4 bg-blue-600 text-white rounded"
            >
                Filters
            </button>
            {isFilteredResults &&
                <h3
                    className='underline text-sm'
                    onClick={resetFilters}
                >Clear</h3>}
        </div>
    )
}

export default DashboardHeader