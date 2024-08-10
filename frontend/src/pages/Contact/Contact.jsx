import React from 'react'

import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact-heading overlay'>Contact Us</div>
      <section className='contact-area pt-70 '>
        <div className='container'>
          <div className='contact-row'>
            <div className='col-md-6 col-sm-12'>
              <div className='title'>
                <h4>get in touch</h4>
              </div>
              <div className='contact-form'>
                <form>
                  <input type='text' placeholder='Name' />
                  <input type='text' placeholder='Subject' />
                  <input type='email' placeholder='Email' />
                  <textarea placeholder='Message' defaultValue={''} />
                  <input type='submit' defaultValue='Send' />
                </form>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <div className='address-group'>
                <div className='title'>
                  <h4>Our address</h4>
                </div>
                <div className='contact-address'>
                  <i className='fas fa-map-marker-alt' />
                  <h4>
                    address: <span>#234 New Street, Michigan, USA</span>
                  </h4>
                </div>
                <div className='contact-address'>
                  <i className='fas fa-phone-alt' />
                  <h4>
                    phone: <span>+880 123 456 789</span>
                  </h4>
                </div>
                <div className='contact-address'>
                  <i className='fas fa-envelope' />
                  <h4>
                    email: <span>contact@foodie.com</span>
                  </h4>
                </div>
                <div className='contact-address'>
                  <i className='fas fa-globe-europe' />
                  <h4>
                    website: <span>www.foodie.com</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='map-frame'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54041.18453750016!2d74.1736448!3d32.161792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1721840149691!5m2!1sen!2s'
            width={600}
            height={450}
            style={{ border: 0 }}
            // className='container'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </section>
      {/*CTA Bottom Area Start*/}
      <section className='cta-bottom-area'>
        <div className='container'>
          <div className='row align-center'>
            <div className='col-md-6 col-sm-5'>
              <h2>need our help</h2>
            </div>
            <div className='col-md-6 col-sm-7'>
              <a href='tel:+8801 654 8564'>
                <i className='fas fa-phone-alt' />
                +8801 654 8564
              </a>
              <a href='mailto:info@khawadawa.com'>
                <i className='far fa-envelope' />
                contact@foodie.com
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*CTA Bottom Area End*/}
    </>
  )
}

export default Contact
