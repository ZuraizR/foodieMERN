import React from 'react'
import { NavLink } from 'react-router-dom'

import './NotFound.css'
import { assets } from '../../assets/assets'

const NotFound = () => {
  return (
    <>
      <div className='not-found-page'>
        <div className='not-found-container'>
          <div className='not-found-image'>
            <img src={assets.notfound_img} alt='404 Error' />
          </div>
          <div className='not-found-text'>
            <h1>Oops!</h1>
            <h2>404 - Page Not Found</h2>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <NavLink to='/' className='home-button'>
              Go Back Home
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
