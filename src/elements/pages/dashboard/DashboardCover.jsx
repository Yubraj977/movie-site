import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'
function DashboardCover() {
    const user=useSelector((state)=>state.user.currentUser)
    console.log(user)
  return user&&user.isAdmin?<Outlet/>:<Navigate to='signin'/> 
}

export default DashboardCover