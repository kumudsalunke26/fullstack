import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

  const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt=""/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li>
        <li onClick={()=>setMenu("Services")} className={menu==="Services"?"active":""}>Services</li>
        <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt=""/>
          <div className="dot"></div>
          
        </div>  
        <button>Sign-in</button>
      </div>
    </div>
    

    
  )
}

export default Navbar