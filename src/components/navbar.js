import React from 'react'
import './navbar.css'
function navbar() {
  return (
    <div className='navbar'>
      <button className='logo'>LOGO</button>
      <div className='empty1'></div>
      <button className='nvbr'>HOME</button>
      <button className='nvbr'>ABOUT</button>
      <button className='nvbr'>MATCHES</button>
      <button className='nvbr'>TEAMS</button>
      <button className='nvbr'>CONTACT</button>
      <button className='nvbr'>GALLERY</button>
      <div className='empty2'></div>
      <div className='socialmedialinks'>
        <div className='smlink'><i className="fa-brands fa-facebook fa-xl"></i></div>
        <div className='smlink'><i className="fa-brands fa-instagram fa-xl"></i></div>
        <div className='smlink'><i className="fa-brands fa-twitter fa-xl"></i></div>
      </div>
    </div>
  )
}

export default navbar;
