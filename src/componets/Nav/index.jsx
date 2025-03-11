import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
  return (
    <>
        <ul className='Nav'>
            <li className = 'Nav-item'>
                <Link to="/">About</Link>
            </li>
            <li className = 'Nav-item'>
                <Link to="/resume">Resume</Link>
            </li>
            <li className = 'Nav-item'>
                <Link to="/work">Work</Link>
            </li>
            <li className = 'Nav-item'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </>
  )
}

export default Nav