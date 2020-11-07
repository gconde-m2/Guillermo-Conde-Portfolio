import React, {useState,useEffect} from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Homelogo from './images/casa-web.png'
import './navfoot.css'
import { Link } from 'react-router-dom'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'
function Footer(){



return(
  
<section className='foot'>
    <a href='https://github.com/gconde-m2'><img  src = {github}/> </a>
    <a href='https://www.linkedin.com/in/guillermo-conde/'> <img  className='paddin' style={{width:"32px"}} src = {linkedin}/> </a>
    <a href='https://www.instagram.com/guilleconde23/'> <img  className='paddin' style={{width:"32px"}} src = {instagram}/> </a>
</section>

)

}

export default Footer