import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return <div>

  <img src="/images/404.gif" className='h-100 w-100' alt="" />

  <div className="position-absolute">
    <NavLink className="btn btn-primary" >GO HOME</NavLink>
  </div>
  </div>;
};

export default Error