import React from 'react'
import { useState,useEffect } from 'react';
import { Sidebar } from "flowbite-react";
import { FaPlus } from "react-icons/fa6";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useLocation,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signOutUserSucess} from '../../../app/slice/userSlice'




function DashSidebar() {
  const dispatch=useDispatch()
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab')
    setTab(tabFromUrl)

  }, [location.search])

  const navigate=useNavigate()
  async function handleSignout(){
    try {
      const res=await fetch('https://letsdownload.xyz/api/user/signout',{
        method:"POST"
      })
      const data=await res.json()
      console.log(res)
      console.log(data)
      if(res.ok){
        dispatch(signOutUserSucess())
      }
    } catch (error) {
      setfetchEroor(error)
    }
  }
    return (
        <Sidebar aria-label="Default sidebar example " className='lg:w-auto  '>
          <Sidebar.Items>
            <Sidebar.ItemGroup className='flex gap-4 flex-col'>
              <Link to='/dashboard?tab=dashboard'>
              <Sidebar.Item href="#" icon={HiChartPie} active={tab == 'dashboard'} >
             <span className='lg:block hidden'>   Dashboard</span>
              </Sidebar.Item>
              </Link>
             
              <Link to='/dashboard?tab=movies' >
              <Sidebar.Item href="#" icon={HiTable} active={tab == 'movies'}>
              <span className='lg:block hidden'>   Movies</span>
              </Sidebar.Item>
              </Link>

              <Link to='/dashboard?tab=create'>
              <Sidebar.Item href="#" icon={FaPlus} active={tab == 'create'}>
              <span className='lg:block hidden'>   Create</span>
              </Sidebar.Item>
              </Link>


              <div onClick={handleSignout}>
              <Sidebar.Item href="#" icon={HiArrowSmRight} >
              <span className='lg:block hidden'>   Logout</span>
              </Sidebar.Item>
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>)
}

export default DashSidebar