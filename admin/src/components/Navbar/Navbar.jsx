import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img className='logo' src={assets.logo} alt='logo' /> */}
      <h1 className='logo'>Foodie.</h1>
      <span className='logo-para'>Admin Panel</span>
      <img className='profile' src={assets.profile_image} alt='profile' />
    </div>
  )
}

export default Navbar
