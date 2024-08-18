import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container position-relative d-flex align-items-center justify-content-between">

      <NavLink  to="index.html" className="logo logo-d  ">
      
        <img src="./logo.png" alt=""/>
      </NavLink> 

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><NavLink  to="/home" >Home<br /></NavLink> </li>
          <li><NavLink  to="/about">About</NavLink> </li>
          <li><NavLink  to="/services">Services</NavLink> </li>
          <li><NavLink  to="/events">Events</NavLink> </li>
          <li><NavLink  to="/chefs">Chefs</NavLink> </li>
          <li><NavLink  to="/gallery">Gallery</NavLink> </li>
          <li className="dropdown"><NavLink  to="/"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink> 
            <ul>
              <li><NavLink  to="/">Dropdown 1</NavLink> </li>
              <li className="dropdown"><NavLink  to="/"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink> 
                <ul>
                  <li><NavLink  to="/">Deep Dropdown 1</NavLink> </li>
                  <li><NavLink  to="/">Deep Dropdown 2</NavLink> </li>
                  <li><NavLink  to="/">Deep Dropdown 3</NavLink> </li>
                  <li><NavLink  to="/">Deep Dropdown 4</NavLink> </li>
                  <li><NavLink  to="/">Deep Dropdown 5</NavLink> </li>
                </ul>
              </li>
              <li><NavLink  to="/">Dropdown 2</NavLink> </li>
              <li><NavLink  to="/">Dropdown 3</NavLink> </li>
              <li><NavLink  to="/">Dropdown 4</NavLink> </li>
            </ul>
          </li>
          <li><NavLink  to="/contact">Contact</NavLink> </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <NavLink  className="btn-getstarted" to="index.html/book-a-table">Book a Table</NavLink> 

    </div>
  </header>
  );
};

export default Header;