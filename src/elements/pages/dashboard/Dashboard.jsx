import React, { useState,useEffect } from 'react'
import DashSidebar from './DashSidebar'
import Dashmovie from './Dashmovie'
import Dashdashboard from './Dashdashboard'
import MovieCreate from './MovieCreate'
import { useLocation } from 'react-router-dom'
function Dashboard() {
  const location=useLocation()
  const [tab,setTab]=useState('')
  console.log(tab)
  useEffect(() => {
    const urlParams=new URLSearchParams(location.search);
    const tabFromUrl=urlParams.get('tab')
    setTab(tabFromUrl)
    
  }, [location.search])
  
  return (
    <div className='min-h-screen flex'>
        
        <DashSidebar/>
        {tab=='dashboard'&& <Dashdashboard/>}
        {tab=='movies'&& <Dashmovie/>}
        {tab=='create'&& <MovieCreate/>}
       
        
        </div>
  )
}

export default Dashboard