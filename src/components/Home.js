import React from 'react';
import './Home.css';
import bhawan from './images/bhawan.webp';
import logo from './images/logo.jfif';
import location from './images/location.png'
const Home = () => {
  return (
    <>
    <div className='Home-container'>
        <div className='left'>
          <h1>
            Bhumiar Samaj Bhilai  
          </h1>

          <h2>
            About Us
          </h2>
          <p>
            We are Hindu Community who belong to states of Bihar,Jharkhand and purvanchal Region of uttar Pradesh,
            Bhumihar were Brahmins who had been offered and given lands by Parshuram.Parshuram who killed kshatriya 21 times and were destroyed.the 
            Same Brahmins became Bhumiars(Land owning Group) 
            <br></br>
            <br></br>
            We,Bhilai Bhumiar Samaj aims to promote and Revive  the Traditions and Culture of our community and our land and Maintain a Gathering for the Bhumiars Residing 
            in Bhilai,Chattisgarh Since 2003 swear the Importance of the community in the City. Bhumiar Samaj Bhilai has Incubated in Bringing Moral and entice people  in Promoting  Vivid traditions and ethics  from time to time
            <br></br>
            <br></br>
            We always encouraged an embracing attitude towards the people of Our Community and gave out the 
            best possible in fulfilling the mission to zeal the rich culture and heritage
            <br></br>
            <br></br>
            Organizes several artistic, social events with traditional festivals including Chatt Puja,Ganesh Chaturthi And many social Events. 
          </p>
        </div>
        <div className='right'>
       <img src={bhawan} alt='Parshuram bhawan'/>
        </div>
    </div>
    <div className='cont2'>
    <div className='b1'>
     
    </div>
    <div className='loc'>
       <div className='left-loc'>
         <div className='img'>
          <img src={logo} alt='this is our logo'/>
       </div>
       <div className='det'>
       <p>
       Bhumiar Samaj Bhilai was established in 2003, 
       as a leading socio- cultural forum for the People Of Bhumiar Community living in Bhilai that spreads the broad spectrum of the society. Connect our members and be part of the cultural and social activities. We are devoted to fabricate an environment conducive in fostering and elevating the heritage of our Community in the land of Bhilai,Chattisgarh. We entices key values that needs to be build 
        traits and encourage collectivenes.
       </p>
       </div>
       </div>
       <div className='right-loc'>
          <img src={location}m alt='this is location '/>
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
    </div>
    </>
  )
}

export default Home
