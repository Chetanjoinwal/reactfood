import React from 'react'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return <>
  <footer id="footer" className="footer dark-background">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-geo-alt icon"></i>
          <div className="address">
            <h4>Address</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-telephone icon"></i>
          <div>
            <h4>Contact</h4>
            <p>
              <strong>Phone:</strong> <span>+1 5589 55488 55</span><br/>
              <strong>Email:</strong> <span><NavLink  to="//cdn-cgi/l/email-protection" className="cf_email" data-cfemail="96fff8f0f9d6f3eef7fbe6faf3b8f5f9fb">[email&#160;protected]</NavLink ></span><br/>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-clock icon"></i>
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br/>
              <strong>Sunday</strong>: <span>Closed</span>
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
            <NavLink  to="/#" className="twitter"><i className="bi bi-twitter-x"></i></NavLink >
            <NavLink  to="/#" className="facebook"><i className="bi bi-facebook"></i></NavLink >
            <NavLink  to="/#" className="instagram"><i className="bi bi-instagram"></i></NavLink >
            <NavLink  to="/#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink >
          </div>
        </div>

      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Yummy</strong> <span>All Rights Reserved</span></p>
       <div className="credits"> Designed by <NavLink  to="#">BootstrapMade</NavLink>
      </div>
    </div>
  </footer>
  <NavLink  to="/#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></NavLink >
 </>
}

export default Footer