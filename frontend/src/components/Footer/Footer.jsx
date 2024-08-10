import React from 'react'
import { NavLink } from 'react-router-dom'

import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  const date = new Date()

  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          {/* <img src={assets.logo} alt='footer_logo' /> */}
          <h1 className='logo'>Foodie.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, praesentium deserunt, explicabo corporis quasi iusto cum
            cupiditate maxime eius dolorum quaerat minus eum vero quam
            voluptatibus repellendus, consequatur aliquid delectus.
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='facebook' />
            <img src={assets.twitter_icon} alt='twitter' />
            <img src={assets.linkedin_icon} alt='linkedin' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2 className='heading-underline'>COMPANY</h2>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/delivery'>Delivery</NavLink>
            </li>
            <li>
              <NavLink to='/policy'>Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2 className='heading-underline'>GET IN TOUCH</h2>
          <ul>
            <li>+2-222-333-4444</li>
            <li>contact@foodie.com</li>
          </ul>
        </div>
        <div className='app-download' id='app-download'>
          <div className='app-download-platforms'>
            <img src={assets.play_store} alt='PlayStore' />
            <img src={assets.app_store} alt='AppStore' />
          </div>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright {date.getFullYear()} &copy; Foodie.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
