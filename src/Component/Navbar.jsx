import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (

    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
    <ul className="navbar-nav">
        <li className="nav-item"><NavLink to="/home" className="nav-link js-scroll active">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link js-scroll" >About</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" className="nav-link js-scroll" >contact</NavLink></li>
        <li className="nav-item"><NavLink to="/service" className="nav-link js-scroll" >Services</NavLink></li>
        <li className="nav-item"><NavLink to="/blog" className="nav-link js-scroll" >Blogs</NavLink></li>
        <li className="nav-item book-now"><NavLink to="/*" className="nav-link js-scroll" >Book Now</NavLink></li>
        <li className="nav-item"><NavLink to="/" className="nav-link js-scroll" >Contact</NavLink></li>
    </ul>
 </div>
  )
}

export default Navbar