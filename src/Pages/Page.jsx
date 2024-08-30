import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import NotFound from '../components/NotFound/NotFound'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import Dashboard from '../components/Dashboard/Dashboard'
import Inventory from '../components/OtherComponents/Inventory.jsx'
import Orders from '../components/OtherComponents/Orders.jsx'
import Returns from '../components/OtherComponents/Returns.jsx'
import Customers from '../components/OtherComponents/Customers.jsx'
import Shipping from '../components/OtherComponents/Shipping.jsx'
import Channel from '../components/OtherComponents/Channel.jsx'
import Integrations from '../components/OtherComponents/Integrations.jsx'
import './Page.css'

const Page = () => {
    const location = useLocation();

    return (
      <div className='page'>
        <div className="page-con">
          {(location.pathname !== '/not-found') && <LeftSideBar />}
          <div className="page-content">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/inventory' element={<Inventory />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/returns' element={<Returns />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/shipping' element={<Shipping />} />
              <Route path='/channel' element={<Channel />} />
              <Route path='/integrations' element={<Integrations />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to="/not-found" />} />
            </Routes>
          </div>
        </div>
      </div>
    )
}

export default Page