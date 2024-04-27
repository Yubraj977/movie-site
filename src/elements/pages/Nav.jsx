import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Navbar } from 'flowbite-react'
import { DarkThemeToggle } from 'flowbite-react'
import { Link,NavLink } from 'react-router-dom'
import { Footer } from "flowbite-react";
import jerry from '../../assets/jerry.png'
import { Dropdown } from "flowbite-react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signOutUserSucess } from '../../app/slice/userSlice'
function Nav() {
  const [fetchEroor,setfetchEroor]=useState()
  async function handleSignout(){
    try {
      const res=await fetch('https://ymshub-api.onrender.com/api/user/signout',{
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
  const dispatch=useDispatch()
  const user=useSelector((state)=>state.user.currentUser)
  const navigate=useNavigate()
    const has='#1f2937'
  return (
    <>
    <div className='lg:px-20 ' >
    <Navbar fluid rounded className="bg-transparent text-black  ">


    <Navbar.Brand as={Link} href="#" className='mt-6'>
      <img src={jerry} className="mr-3 lg:h-12  sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white font-allerta ">Yms <span className='text-cyan-300'> Hub</span> </span>
    </Navbar.Brand>
    <div className="flex md:order-2 gap-4">
    <DarkThemeToggle />
    {user&&user.isAdmin?<Button onClick={(e)=>navigate('/dashboard?tab=dashboard')}>Dashboard</Button>:null}
    { user&&user.isAdmin?<Button onClick={handleSignout}>Logout</Button>:<Button onClick={(e)=>navigate('/signin')}>sign in</Button>}


        <Navbar.Toggle />
      </div>


    <Navbar.Collapse className='lg:ml-40 '>
      <Navbar.Link>  <NavLink to='/' className=' ' >Home</NavLink> </Navbar.Link>
      <Navbar.Link > <NavLink to='/comedy' className=' '>Comedy</NavLink></Navbar.Link>
      <Navbar.Link > <NavLink to='/action' className=' '>Action</NavLink></Navbar.Link>
     

      
      <div className='ml-3'>
      <div  className='text-black dark:text-white'>
      <Dropdown label="Language" inline className=' bg-slate-500  ' size="lg">
      <Dropdown.Item className='text-black'><NavLink to='/nepali' className='text-black  '>Nepali</NavLink></Dropdown.Item>
      <Dropdown.Item className='text-black'><NavLink to='/english' className='text-black  '>English</NavLink></Dropdown.Item>
      <Dropdown.Item><NavLink to='/hindi' className='text-black  '>Hindi</NavLink></Dropdown.Item>
    </Dropdown>

  

    </div>

       </div>


    


       <Navbar.Link > <NavLink to='/about' className=' '>About</NavLink></Navbar.Link>


      
     
     
  
    </Navbar.Collapse>
  </Navbar>
  <Outlet/>
  
  </div>
  <Footer container className='mt-12 bg-slate-900 w-full px-40 py-10' >
  <Footer.Copyright onClick={()=>{Navigate('/')}} by="YmsHub™" year={2024} />
  <Footer.LinkGroup className='mt-4'>
    <Footer.Link onClick={()=>{navigate('/about')}}>About</Footer.Link>
    <Footer.Link href="#">Privacy Policy</Footer.Link>
    <Footer.Link href="#">Licensing</Footer.Link>
    
  </Footer.LinkGroup>
</Footer>
</>
  )
}

export default Nav