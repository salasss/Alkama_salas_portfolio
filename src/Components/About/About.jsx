import React from 'react';
import "./About.css";
import Me from '../../assets/profile-pic.png';
import Aboutbox from '../About/Aboutbox';

function About() {
  return (
    <div className="about container section" id='About'>
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Me} alt="" className='about_img' />
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_disc">I'm Salas Alkama, a young computer science student, passionate about everything related to this field since my early years. I am driven by the desire to complete my education and acquire the necessary knowledge in Web and software development.</p>
            <a href="" className='btn'>Download CV</a>
          </div>
          <div className="about_skills grid">
            <h3>My Skills</h3>
            <div className="skills_data">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-java"></i>
            <i class="fa-brands fa-laravel"></i>
            <i class="fa-brands fa-php"></i>
            <i class="fa-brands fa-python"></i>
              {/* <div className="skills_titles">



                <h3 className="skillname">Java</h3>
                <span className="skillnum ">78%</span>
              </div>
              <div className="skillbar">
                <span className="skillpers developement"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skillname">ReactJS</h3>
                <span className="skillnum ">57%</span>
              </div>
              <div className="skillbar">
                <span className="skillpers developement"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skillname">Laravel</h3>
                <span className="skillnum ">60%</span>
              </div>
              <div className="skillbar">
                <span className="skillpers developement"></span>
              </div>*/}

            </div> 

          </div>
        </div>
      </div>
      <Aboutbox />
    </div>
  )
}

export default About