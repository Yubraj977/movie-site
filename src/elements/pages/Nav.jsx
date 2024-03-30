import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Navbar } from 'flowbite-react'
import { DarkThemeToggle } from 'flowbite-react'
import { Link,NavLink } from 'react-router-dom'
import { Footer } from "flowbite-react";
import jerry from '../../assets/jerry.png'
function Nav() {
  const navigate=useNavigate()
    const has='#1f2937'
  return (
    <div className='lg:px-20 ' >
    <Navbar fluid rounded className="bg-transparent text-white">


    <Navbar.Brand as={Link} href="#" className='mt-6'>
      <img src={jerry} className="mr-3 lg:h-12  sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white font-allerta ">Yms <span className='text-cyan-300'> Hub</span> </span>
    </Navbar.Brand>
    <div className="flex md:order-2 gap-4">
    <DarkThemeToggle />
    <Button>About Us</Button>
        <Navbar.Toggle />
      </div>


    <Navbar.Collapse className='lg:ml-40 text-white'>
      <Navbar.Link>  <NavLink to='/' className='text-white' >Home</NavLink> </Navbar.Link>
      <Navbar.Link > <NavLink to='/comedy' className='text-white'>Comedy</NavLink></Navbar.Link>
      <Navbar.Link > <NavLink to='/tvshows' className='text-white'>Tvshows</NavLink></Navbar.Link>
      <Navbar.Link > <NavLink to='/language' className='text-white'>Language</NavLink></Navbar.Link>
      <Navbar.Link > <NavLink to='/about' className='text-white'>About</NavLink></Navbar.Link>
      <Navbar.Link > <NavLink to='/check' className='text-white'>upload</NavLink></Navbar.Link>
     
  
    </Navbar.Collapse>
  </Navbar>
  <Outlet/>
  <Footer container className='mt-12 bg-slate-900' >
      <Footer.Copyright onClick={()=>{Navigate('/')}} by="Chalachitra™" year={2024} />
      <Footer.LinkGroup className='mt-4'>
        <Footer.Link onClick={()=>{navigate('/about')}}>About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        
      </Footer.LinkGroup>
    </Footer>
  </div>
  )
}

export default Nav