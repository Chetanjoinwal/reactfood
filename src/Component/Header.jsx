import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  
  useEffect(() => {
    // Apply .scrolled className to the body as the page is scrolled down
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileNavToogle = () => {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    };

    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    // Hide mobile nav on same-page/hash links
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });

    // Scroll top button
    const scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    };

    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      mobileNavToggleBtn.removeEventListener('click', mobileNavToogle);
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.removeEventListener('click', mobileNavToogle);
      });
      document.removeEventListener('scroll', toggleScrollTop);
    };
  }, []);  // Empty dependency array means this runs only once after component mounts

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/home" className="logo logo-d">
          <img src="./logo.png" alt=""/>
        </NavLink> 

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/chefs">Chefs</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li className="dropdown">
              <NavLink to="/"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
              <ul>
                <li><NavLink to="/">Dropdown 1</NavLink></li>
                <li className="dropdown">
                  <NavLink to="/"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
                  <ul>
                    <li><NavLink to="/">Deep Dropdown 1</NavLink></li>
                    <li><NavLink to="/">Deep Dropdown 2</NavLink></li>
                    <li><NavLink to="/">Deep Dropdown 3</NavLink></li>
                    <li><NavLink to="/">Deep Dropdown 4</NavLink></li>
                    <li><NavLink to="/">Deep Dropdown 5</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/">Dropdown 2</NavLink></li>
                <li><NavLink to="/">Dropdown 3</NavLink></li>
                <li><NavLink to="/">Dropdown 4</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <NavLink className="btn-getstarted" to="index.html/book-a-table">Book a Table</NavLink>
      </div>
    </header>
  );
};

export default Header;
