import React from 'react'

import './About.css'

const About = () => {
  return (
    <>
      <div className='about-heading overlay'>About Us</div>
      <div className='about-container'>
        <div className='about-image'>
          <img src='/about-1.jpg' alt='About Us' />
        </div>
        <div className='about-content'>
          <h1>Our Mission</h1>
          <p>
            Welcome to our company! We are committed to delivering top-quality
            products and exceptional service to our customers. Our team of
            experienced professionals is dedicated to ensuring your satisfaction
            and building long-term relationships.
          </p>
          <p>
            Our mission is to innovate and lead the industry with our
            cutting-edge solutions. We believe in integrity, transparency, and
            excellence, and strive to exceed our clients' expectations every
            day.
          </p>
          <p>
            We invite you to explore our website to learn more about our
            offerings and how we can serve you. Thank you for choosing us!
          </p>
        </div>
        <br />
        <div className='about-container'>
          <div className='about-content'>
            <h1>Our Vision</h1>
            <p>
              Welcome to our company! We are committed to delivering top-quality
              products and exceptional service to our customers. Our team of
              experienced professionals is dedicated to ensuring your
              satisfaction and building long-term relationships.
            </p>
            <p>
              Our mission is to innovate and lead the industry with our
              cutting-edge solutions. We believe in integrity, transparency, and
              excellence, and strive to exceed our clients' expectations every
              day.
            </p>
            <p>
              We invite you to explore our website to learn more about our
              offerings and how we can serve you. Thank you for choosing us!
            </p>
          </div>
          <div className='about-image'>
            <img src='/about-2.jpg' alt='About Us' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
