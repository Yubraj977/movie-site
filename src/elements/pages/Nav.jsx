import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Navbar } from 'flowbite-react'
import { DarkThemeToggle } from 'flowbite-react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
    <Navbar fluid rounded>
    <Navbar.Brand as={Link} href="https://flowbite-react.com">
      <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link as={Link} href="#">
        About
      </Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <DarkThemeToggle />
      <Navbar.Link href="#">Contact</Navbar.Link>
  
    </Navbar.Collapse>
  </Navbar>
  <Outlet/>
  </div>
  )
}

export default Nav