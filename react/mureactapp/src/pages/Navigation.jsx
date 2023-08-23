import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
  return (
    <>
    
    <nav>
      
    <Link to='/home'><span> home</span></Link>
    <Link to='/about'><span> about</span></Link>
    <Link to='/contact'> <span>contact</span></Link>
    </nav>
    </>
  )
}

export default Navigation