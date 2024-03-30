import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Navbar } from 'flowbite-react'
import { DarkThemeToggle } from 'flowbite-react'
import { Link,NavLink } from 'react-router-dom'
import { Footer } from "flowbite-react";
import jerry from '../../assets/jerry.png'
import { Dropdown } from "flowbite-react";
function Nav() {
  const navigate=useNavigate()
    const has='#1f2937'
  return (
    <>
    <div className='lg:px-20 ' >
    <Navbar fluid rounded className="bg-transparent text-black  ">


    <Navbar.Brand as={Link} href="#" className='lg:mt-6'>
      <img src={jerry} className="mr-3 lg:h-12 h-4 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap lg:text-4xl font-semibold dark:text-white font-allerta ">Yms <span className='text-cyan-300'> Hub</span> </span>
    </Navbar.Brand>
    <div className="flex md:order-2 gap-4">
    <DarkThemeToggle />
    <Button>About Us</Button>
        <Navbar.Toggle />
      </div>


    <Navbar.Collapse className='lg:ml-40 '>
      <Navbar.Link>  <NavLink to='/' className=' ' >Home</NavLink> </Navbar.Link>
      <Navbar.Link > <NavLink to='/comedy' className=' '>Comedy</NavLink></Navbar.Link>
      <Navbar.Link > <NavLink to='/tvshows' className=' '>Tvshows</NavLink></Navbar.Link>

      
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
      <Navbar.Link > <NavLink to='/check' className=' '>upload</NavLink></Navbar.Link>
     
  
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