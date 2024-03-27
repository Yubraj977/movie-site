import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Navbar } from 'flowbite-react'
import { DarkThemeToggle } from 'flowbite-react'
import { Link,NavLink } from 'react-router-dom'
function Nav() {
    const has='#1f2937'
  return (
    <div className='px-20 ' >
    <Navbar fluid rounded className="">


    <Navbar.Brand as={Link} href="#">
      <img src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Funny Pizzy</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
    <DarkThemeToggle />
        <Navbar.Toggle />
      </div>

    {/* <Navbar.Toggle /> */}
    <Navbar.Collapse className='lg:ml-40'>
      <Navbar.Link>  <NavLink to='/'>Home</NavLink> </Navbar.Link>
      <Navbar.Link > <NavLink to='/comedy'>Comedy</NavLink></Navbar.Link>
      <Navbar.Link > <NavLink to='/tvshows'>Tvshows</NavLink></Navbar.Link>
      <Navbar.Link > <NavLink to='/about'>About</NavLink></Navbar.Link>
     
  
    </Navbar.Collapse>
  </Navbar>
  <Outlet/>
  </div>
  )
}

export default Nav