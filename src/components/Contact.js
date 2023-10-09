import React from 'react';
import './Contact.css';
import logo from './images/logo.jfif';
const Contact = () => {
  return (
    <>
    <div className='Contact-container'>
       <div className='c-details'>
        <ol>
            <li>
        <h3 className='h3'>P.P Singh - 9425551122</h3>
        <h3 className='h3'>Email - ppsingh300@gmail.com</h3>
        <p className='p'>President , Bhumiar Samaj Bhilai</p>
        </li>
        <li>
        <h3 className='h3'>Sanjeev Singh  - 9131805496</h3>
        <p className='p'> Vice President , Bhumiar Samaj Bhilai</p>
        </li>
        </ol>
       </div>
    </div>
    <div className='Footer'>
      <div className='para'>
   <p> ©Copyright 2023 Bhumiar Samaj Bhilai. All Rights Reserved</p>
   </div>
   <div className='logo1'>
    <img src={logo} alt='this is logo' />
   </div>
    </div>
    </>
  )
}

export default Contact