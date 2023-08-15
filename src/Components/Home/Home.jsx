import React from 'react';
import "./Home.css";
import Me from '../../assets/profile-pic.png';
import Headersos from './Headersos';
import Scrolldwn from './Scrolldwn';
import Shapes from './Shapes';


function Home() {
  return (
    <section className='home container' id='Home'>
      <div className='intro'>
        <img src={Me} alt="" className='home_img' />
        <h1 className='home_name'> Salas Alkama</h1>
        <span className='home_info'>I'm a Web Developer</span>

        <Headersos />

        <a href="#Contact" className='btn'>Contact Me !</a>

        <Scrolldwn />
      </div>


      <Shapes />
    </section>
  )
}

export default Home