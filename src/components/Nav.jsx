import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
     <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink to='/' className="navbar-brand text-uppercase">
            <strong>Contact</strong> App
          </NavLink>
        </div>
      </nav>
  )
}
