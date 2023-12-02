import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter'
import { CompanyData } from '../interfaces/company'
import { getCompanyData } from '../connections/companyData.data'
import Accordion from '../components/accordian/AccordianHeader'
import Modal from '../components/modal/Modal'
import DashboardHeader from '../components/header/DashboardHeader'
import useDebounce from '../hooks/useDebounce'
import { Filters } from '../interfaces/filters'
import { DEFAULT_FILTERS_VALUE } from '../constants'
import dayjs from 'dayjs'
import CompanyDetails from '../components/company-details/CompanyDetails'
import toast from 'react-hot-toast'


const Home = () => {
    const [companyData, setCompanyData] = useState<CompanyData[]>([]);
    const [filteredResults, setFilteredResults] = useState<CompanyData[]>([]);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);
    const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS_VALUE);
    const [searchText, setSearchText] = useState<string>('');

    const resetFilters = () => {
        setSearchText('');
        setFilters(DEFAULT_FILTERS_VALUE);
        setFilteredResults(companyData);
    }

    useEffect(() => {
        setCompanyData(getCompanyData());
    }, []);

    useEffect(() => {
        if(companyData.length){
            setFilteredResults(companyData);
        }
    }, [companyData])

    // Using custom debounce hook to avoid unnecesary calls when typing search fast, delaying 700 miliseconds.
    useDebounce(() => {
        if (companyData.length) {
            let results = companyData;
            if (searchText) {
                results = companyData.filter(data => data.companyName.toLowerCase().includes(searchText.toLowerCase()))
                if (results.length === 0) {
                    toast.error('Oops! No results for this search text')
                }
                setFilteredResults(results);
                setFilters(DEFAULT_FILTERS_VALUE);
            } else {
                setFilteredResults(companyData);
            }
        }

    }, [searchText], 700)

    const handleFilters = () => {
        if (JSON.stringify(filters) === JSON.stringify(DEFAULT_FILTERS_VALUE)) {
            setIsFilterPanelOpen(false);
            return;
        }
        let results = companyData;
        const { isActive, loanAmount, date } = filters;
        if (filters.isActive !== DEFAULT_FILTERS_VALUE.isActive) {
            results = companyData.filter(data => data.accountStatus === isActive);
        }

        if (loanAmount !== DEFAULT_FILTERS_VALUE.loanAmount) {
            results = results.filter(data => data.loanAmount > loanAmount);
        }

        if (JSON.stringify(filters.date) !== JSON.stringify(DEFAULT_FILTERS_VALUE.date)) {
            console.log('not equal')
            results = results.filter(data => dayjs(data.registrationDate).isBefore(dayjs(date.endDate))
                && dayjs(data.registrationDate).isAfter(dayjs(date.startDate)));
        }
        if (results.length === 0) {
            toast.error('We have no results for this filter! Please try again.')
        }
        setFilteredResults(results);
        setIsFilterPanelOpen(false);
    }

    return (
        <div>
            <Header />
            <DashboardHeader
                searchText={searchText}
                setIsFilterPanelOpen={setIsFilterPanelOpen}
                setSearchText={setSearchText}
                isFilteredResults={filteredResults.length !== companyData.length}
                resetFilters={resetFilters}
            />

            <div className='mx-0.5 flex flex-col overflow-y-auto items-center w-full'>
                Showing {filteredResults.length} results of {companyData.length}
                <div className='flex flex-col w-11/12 h-full overflow-y-auto mt-5'>
                    {filteredResults.length > 0 ?
                        filteredResults.map((company, index) => (
                            <Accordion title={company.companyName} key={`${company.contactNumber}${index}`}>
                                <CompanyDetails companyData={company} />
                            </Accordion>
                        ))
                        : 'Nothing to show here, try re-setting the filters'}
                </div>
            </div>
            <Modal
                isOpen={isFilterPanelOpen}
                onApply={handleFilters}
                onCancel={() => {
                    setFilters(DEFAULT_FILTERS_VALUE);
                    handleFilters();
                }}
                onClose={() => setIsFilterPanelOpen(false)}
            >
                <SearchAndFilter filters={filters} setFilters={setFilters} />
            </Modal>

        </div>
    )
}

export default Home