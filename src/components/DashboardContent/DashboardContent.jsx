import React from 'react'
import LineChart from '../../components/LineChart/LineChart'
import PieChart from '../../components/PieChart/PieChart'
import './DashboardContent.css'

const DashboardContent = () => {
  return (
    <div className='dashboard-content'>
        <LineChart />
        <PieChart />
    </div>
  )
}

export default DashboardContent