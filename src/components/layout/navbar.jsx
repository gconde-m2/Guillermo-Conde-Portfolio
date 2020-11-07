import React, {useState,useEffect} from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Homelogo from './images/casa-web.png'
import './navfoot.css'
import { Link } from 'react-router-dom'
import logonav from './images/navlogo.png'
function navbar(){



return(
  
    <Navbar  collapseOnSelect  className='nav'  expand="lg" bg="" variant="dark" >
  <Navbar.Brand href='#' ><Link to='/'className='enlaces'> <img className='navlogo' src={logonav} alt=""/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse bg="dark" id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav className='enlaces'>
    <Nav.Link href='#'> <Link to='/Guillermo-Conde-Portfolio/resume'className='enlaces'>Resume</Link></Nav.Link>
     <Nav.Link href='#' ><Link to='/Guillermo-Conde-Portfolio/aboutme'className='enlaces'>About me</Link></Nav.Link>
      <Nav.Link href='#' ><Link to='/Guillermo-Conde-Portfolio/proyects'className='enlaces'>My work</Link></Nav.Link>
      <Nav.Link href='#'><Link to='/Guillermo-Conde-Portfolio/contact'className='enlaces'>Contact</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)

}

export default navbar