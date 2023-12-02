import React from 'react'
import { CompanyDetailTypes } from './companyDetails.types'

const CompanyDetails = ({companyData}: CompanyDetailTypes) => {
  return (
    <div className='grid grid-cols-2 gap-2 break-words'>
        <div>
            <h3 className='font-semibold'>Company Name:</h3> <span> {companyData.companyName}</span>
            <h3 className='font-semibold'>Phone:</h3> <span> {companyData.contactNumber}</span>
            <h3 className='font-semibold'>Website:</h3> <span> {companyData.companyWebsite}</span>
            <h3 className='font-semibold'>Address:</h3> <span> {companyData.address}</span>
            <h3 className='font-semibold'>Email:</h3> <span> {companyData.contactEmail}</span>
            <h3 className='font-semibold'>Net Profit:</h3> <span> {companyData.netProfite}</span>
        </div>
        <div>
            <h3 className='font-semibold'>Loan amount:</h3> <span> {companyData.loanAmount}</span>
            <h3 className='font-semibold'>Interest:</h3> <span> {companyData.loanInterest}</span>
            <h3 className='font-semibold'>Number of employees:</h3> <span> {companyData.numberOfEmployees}</span>
            <h3 className='font-semibold'>Raised capital:</h3> <span> {companyData.raisedCapital}</span>
            <h3 className='font-semibold'>Registration Date:</h3> <span> {companyData.registrationDate.toDateString()}</span>
            <h3 className='font-semibold'>Account status:</h3> <span> {companyData.accountStatus ? 'Active' : 'Closed'}</span>
        </div>
    </div>
  )
}

export default CompanyDetails