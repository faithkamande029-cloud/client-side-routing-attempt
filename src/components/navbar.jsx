import React from 'react'
import { NavLink } from 'react-router-dom'

function navbar() {
  return (
    <nav  className="inline-block box-border w-60 p-5 mx-6 mb-6 bg-blue-600 no-underlinen text-center text-medium text white">
        <NavLink 
            to="/"
        >
        Home
        </NavLink>
        <NavLink 
            to="/about"
            
        >
        About
        </NavLink>
        <NavLink 
            to="/login"
            
        >
        Login
        </NavLink>
    </nav>
  )
}

export default navbar