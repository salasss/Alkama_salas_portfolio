import React, { useState } from 'react';
import "./Sidebar.css";
import logo from "../../assets/SA_logo.svg";



const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <aside className={toggle ? "aside show_menu ":"aside" } >
      <a href="#Home" className="nav_logo">
        <img src={logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
          <li className="nav_item">
              <a href="#Home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#About" className="nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            
            <li className="nav_item">
              <a href="#Service" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#Resume" className="nav_link">
              <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#Portfolio" className="nav_link">
              <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#Contact" className="nav_link">
              <i className="icon-bubble"></i>

              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copyrigth">© 2023.</span>
      </div>
      <div className={toggle ? "nav_toggle nav_toggle-open" :"nav_toggle"} onClick={() =>showMenu(!toggle)} >
      <i className='icon-menu'></i>
    </div>
    </aside>

    

  );
};

export default Sidebar