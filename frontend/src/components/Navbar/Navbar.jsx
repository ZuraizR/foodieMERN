import React, { useState, useContext, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { showLogin, setShowLogin, getTotalCartAmount, token, setToken } =
    useContext(StoreContext)
  const [navbar, setNavbar] = useState(false)
  const savedToken = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    toast.success('Successfully Logged Out')
    navigate('/')
  }

  useEffect(() => {
    const handleWindowWheel = (event) => {
      if (showLogin) {
        event.preventDefault()
      }
    }

    window.addEventListener('wheel', handleWindowWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWindowWheel)
    }
  }, [showLogin])

  const changeNavBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavBackground)

  return (
    <div className={`container ${navbar ? 'navbar sticky' : 'navbar'}`}>
      <Link to='/'>
        {/* <img src={assets.logo} alt='Logo' className='logo' /> */}
        <h1 className='logo'>Foodie.</h1>
      </Link>
      <ul className='navbar-menu'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/menu'>Menu</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About Us</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact Us</NavLink>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='Search' />
        <div className='navbar-search-icon'>
          <Link
            to='/cart'
            title={getTotalCartAmount() ? 'Cart' : 'Cart is empty'}
          >
            <img src={assets.basket_icon} alt='Cart' />
          </Link>
          <div className={getTotalCartAmount() && 'dot'}></div>
        </div>
        {!savedToken ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt='profileImg' />
            <ul className='nav-profile-dropdown'>
              <li>
                <img src={assets.bag_icon} alt='' />
                <p onClick={() => navigate('/myorders')}>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt='logout' />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
