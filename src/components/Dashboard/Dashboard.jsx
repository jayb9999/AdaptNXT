import React from 'react'
import Header from '../Header/Header'
import DashboardContent from '../DashboardContent/DashboardContent'
import './Dashboard.css'

const Dashboard = () => {
    const title = 'Dashboard'
return (
    <div className='dashboard-con'>
        <Header title={title}/>
        <DashboardContent />
    </div>
    )
}

export default Dashboard