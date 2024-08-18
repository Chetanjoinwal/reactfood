import React from 'react'
import { NavLink } from 'react-router-dom'

const Innerbanner = () => {
  return<>
  
<section className="hero-wrap  pt-0">
  <div className="overlay"></div>
  <div className="container ">
    <div className="row no-gutters hero-wrap-2 slider-text align-items-center justify-content-center">
      <div className="col-md-9 ftco-animate text-start ">
        <h1 className=" bread">About</h1>
        <p className="breadcrumbs"><span className="mr-2"><NavLink to="/home">Home /<i className="bi bi-right"></i></NavLink></span> <span>About <i className="bi bi-right"></i></span></p>
      </div>
    </div>
  </div>
</section>
  </>
}

export default Innerbanner;