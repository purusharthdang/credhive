import React, { useMemo, useState } from 'react'
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CompanyDetailTypes } from './companyDetails.types'
import Modal from '../modal/Modal';

const CompanyDetails = ({ companyData }: CompanyDetailTypes) => {

  const [isChartOpen, setIsChartOpen] = useState<boolean>(false);

  const chartOptions: Options = useMemo(() => {
    return {
      chart: {
        type: "column"
      },
      title: {
        text: "Financial data"
      },
      yAxis: {
        title: {
          text: 'Amount in rupees'
        }
      },
      series: [
        {
          type: "bar",
          name: 'Profit',
          data: [companyData.netProfite]
        },
        {
          type: "bar",
          name: 'Loan amount',
          data: [companyData.loanAmount]
        },
        {
          type: "bar",
          name: 'Loan interest',
          data: [companyData.loanInterest]
        }
      ],
      xAxis: {
        categories: ["Profit", "Loan amount", "Loan interest"],
        labels: {
          useHTML: true,
          formatter: () => ""
        }
      }
    }
  }, [companyData])

  return (
    <div>
      <button
      className='px-4 bg-blue-600 text-white rounded' 
      onClick={() => setIsChartOpen(true)}>
        Show chart
      </button>
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
      <Modal
        isOpen={isChartOpen}
        onClose={() => setIsChartOpen(false)}>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />

      </Modal>
    </div>
  )
}

export default CompanyDetails