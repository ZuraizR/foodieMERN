import React, { useContext, useState } from 'react'

import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import './LoginPopup.css'

const LoginPopup = () => {
  const { currState, setCurrState, setShowLogin, url, setToken, token } =
    useContext(StoreContext)
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData((data) => ({ ...data, [name]: value }))
  }

  const onLogin = async (e) => {
    e.preventDefault()
    let newUrl = url
    if (currState === 'Login') {
      newUrl += '/user/login'
    } else {
      newUrl += '/user/register'
    }

    const response = await axios.post(newUrl, data)
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem('token', response.data.token)
      toast.success('Successfully Logged In', {
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      })
      setShowLogin(false)
    } else {
      toast.error(response.data.message, {
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      })
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt='close'
          />
        </div>
        <div className='login-popup-inputs'>
          {currState === 'Sign Up' && (
            <input
              type='text'
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              placeholder='Your Name'
              required
            />
          )}
          <input
            type='email'
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            placeholder='Your Email'
            required
          />
          <input
            type='password'
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            placeholder='Your Password'
            required
          />
        </div>
        <button type='submit'>
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        <div className='login-popup-checkbox'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' && (
          <p>
            Create new account?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        )}
        {currState === 'Sign Up' && (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup
