import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter'
import { CompanyData } from '../interfaces/company'
import { getCompanyData } from '../connections/companyData.data'
import Accordion from '../components/accordian/AccordianHeader'


const Home = () => {
    const [companyData, setCompanyData] = useState<CompanyData[]>([]);
    useEffect(() => {
        setCompanyData(getCompanyData());
    }, []);
    return (
        <div className='overflow-y-hidden'>
            <Header />
            <div className='mx-0.5 flex flex-col items-center w-full'>
                <SearchAndFilter />
                <div className='flex flex-col w-11/12 h-full overflow-y-auto mt-10'>
                    {companyData.length > 0 ?
                        companyData.map((company, index) => (
                            <Accordion title={company.companyName} key={`${company.contactNumber}${index}`}>
                                {company.loanAmount}
                            </Accordion>
                        ))
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Home