import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.jfif'
const Navbar = () => {
  return (
 <div className='Navbar'>
       <div className='logo' id='logo'>
        <img src={logo} alt='this is logo'/>
       </div>   
       <nav className='nav'>  
      
        <Link className='a' to='/' >Home</Link>
        <Link className='a' to='/events' >Upcoming Events</Link>
        <Link className='a' to='/contact'>Contact us</Link>
        <Link className='a' to='/gallery'>Gallery</Link>

       </nav>
 </div>
  )
}

export default Navbar