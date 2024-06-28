import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='nav-logo'>FihrCafe</h1>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Conheça</li>
        <li>Sobre</li>
        <li className='nav-contact'>Contato</li>
      </ul>
    </div>
  )
}

export default Navbar
