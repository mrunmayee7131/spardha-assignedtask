import React from "react";
import "./navbar.css";

const Navbar = () => {

  return (
    <div>
    <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo">Logo</label>
    <ul>
      <li className="nvbr"><a class="active" href="#">Home</a></li>
      <li className="nvbr"><a href="#">About</a></li>
      <li className="nvbr"><a href="#">Matches</a></li>
      <li className="nvbr"><a href="#">Team</a></li>
      <li className="nvbr"><a href="#">Contact</a></li>
      <li className="nvbr"><a href="#">Gallery</a></li>
    </ul>
   
  </nav>
  
  </div>



)};

export default Navbar;