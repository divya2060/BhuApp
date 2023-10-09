import React from 'react';
import './Gallery.css';
import logo from './images/logo.jfif';
import bhawan from './images/bhawan.webp';
import bhawan1 from './images/bhawan1.webp';
import bhawan2 from './images/bhawan2.jpg';  
import bhawan3 from './images/bhawan3.jpg';
import bhawan4 from './images/bhawan4.jpg';
import bhawan5 from './images/bhawan5.jpg';
import bhawan6 from './images/bhawan6.jpg';
import bhawan7 from './images/bhawan7.jpg';
import bhawan8 from './images/bhawan8.jpg';
import bhawan9 from './images/bhawan9.jpg';
import bhawan10 from './images/bhawan10.jpg';
import bhawan11 from './images/bhawan11.jpg';
const Gallery = () => {

  return (
    <>
    <div className='Gallery-container'>
        <div className='images'>
          
         <div className='img'>
     <img src={bhawan} alt='this is bhawan building'/>
         </div>
         <div className='img'>
         <img src={bhawan1} alt='this is bhawan building'/>
         </div>
         <div className='img'>
         <img src={bhawan2} alt='this is bhawan building'/>
         </div>
        </div>
        <div className='images'>
        
        <div className='img'>
        <img src={bhawan3} alt='this is bhawan building'/>
        </div>

        <div className='img'>
        <img src={bhawan4} alt='this is bhawan building'/>
        </div>

        <div className='img'>
        <img src={bhawan5} alt='this is bhawan building'/>
        </div>
        </div>

        <div className='images'>
        
        <div className='img'>
        <img src={bhawan6} alt='this is bhawan building'/>
        </div>

        <div className='img'>
        <img src={bhawan7} alt='this is bhawan building'/>
        </div>

        <div className='img'>
        <img src={bhawan8} alt='this is bhawan building'/>
        </div>
        </div>


        <div className='images'>
        
        <div className='img'>
        <img src={bhawan9} alt='this is bhawan building'/>
        </div>

        <div className='img'>
        <img src={bhawan10} alt='this is bhawan building'/>
        </div>

        <div className='img'>
        <img src={bhawan11} alt='this is bhawan building'/>
        </div>
        </div>

     <div className='head'>
      <h1>Gallery</h1>
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

export default Gallery;
