import React from 'react';
import './css/navbar.css';

//psudo nav
const Navbar = () => {
  return (
    <div className="navbar-main-div box-shadow">
      <div>
        <h4 className="navbar-h4-title">Where in the world?</h4>
        <p className="m-0">Front End Mentor Design</p>
      </div>
      <span>Dark Mode</span>
    </div>
  );
};

export default Navbar;
