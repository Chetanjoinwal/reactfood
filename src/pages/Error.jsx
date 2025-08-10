import React from 'react'
import { NavLink } from 'react-router-dom'
import errorGif from '../../public/images/404.gif' 

const Error = () => {
  return (
    <div>
      <img src={errorGif} className="h-100 w-100" alt="404 - Page Not Found" />

      <div className="position-absolute">
        <NavLink to="/" className="btn btn-primary">GO HOME</NavLink>
      </div>
    </div>
  )
}

export default Error
