import React, { useEffect } from 'react'
import {
  Pagination,
  Navigation,
  Autoplay,
  A11y,
  Parallax,
  Keyboard,
  Scrollbar,
} from 'swiper/modules'

import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  useEffect(() => {
    var swiper = new Swiper('.swiper-container-h', {
      modules: [
        Pagination,
        Navigation,
        Autoplay,
        A11y,
        Keyboard,
        Scrollbar,
        Parallax,
      ],
      slidesPerView: 1,
      direction: 'horizontal',
      effect: 'slide',
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      parallax: true,
      speed: 1800,
      rtl: true,
      loop: true,
      loopFillGroupWithBlank: !0,

      mousewheel: {
        eventsTarged: '.swiper-slide',
        sensitivity: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    })
  }, [])

  return (
    <div>
      <section className='header creative-fullpage--slider'>
        <div className='banner-horizental'>
          <div className='swiper swiper-container-h'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='slider-inner' data-swiper-parallax={100}>
                  <img src={assets.header_img} alt='full_screen-image' />
                  <div className='swiper-content' data-swiper-parallax={2000}>
                    <div className='title-area'>
                      {/* title-area */}
                      <p className='tag'>Order Your Favourite</p>
                      <a href='#' className='title'>
                        {' '}
                        Food{' '}
                      </a>
                      {/* title area */}
                    </div>
                    <p className='disc'>
                      Credibly leverage existing business experiences through
                      <br />
                      magnetic mindshare. Synergistically exploit
                      <br />
                      efficient partnerships world-class applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='slider-inner' data-swiper-parallax={100}>
                  <video autoPlay loop muted>
                    <source src={assets.salad_video} type='video/mp4' />
                  </video>
                  {/* <img src='/header_img-2.jpg' alt='full_screen-image' /> */}
                  <div className='swiper-content' data-swiper-parallax={2000}>
                    <div className='title-area'>
                      {/* title-area */}
                      <p className='tag'>ART OF MAKING</p>
                      <a href='#' className='title'>
                        {' '}
                        SALAD{' '}
                      </a>
                      {/* title area */}
                    </div>
                    <p className='disc'>
                      Salads are much more than a simple side dish
                      <br />
                      they can be a culinary masterpiece that combines flavor
                      <br />
                      salads can transform into a satisfying main course.
                    </p>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='slider-inner' data-swiper-parallax={100}>
                  <video autoPlay loop muted>
                    <source src={assets.veg_video} type='video/mp4' />
                  </video>
                  {/* <img src='/pasta-4.jpg' alt='full-screen-img' /> */}
                  <div className='swiper-content' data-swiper-parallax={2000}>
                    <div className='title-area'>
                      {/* title-area */}
                      <p className='tag'>THE VERSATILITY OF</p>
                      <a href='#' className='title'>
                        {' '}
                        VEGS{' '}
                      </a>
                      {/* title area */}
                    </div>
                    <p className='disc'>
                      Vegetables are the cornerstone of a healthy diet offering
                      <br />
                      nutrients and flavors that can transform any meal
                      <br />
                      Whether you prefer them raw, roasted, steamed, or grilled
                      <br />
                      vegetables can be prepared in countless ways to suit every
                      palate.
                    </p>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='slider-inner' data-swiper-parallax={100}>
                  <video autoPlay loop muted>
                    <source src={assets.pasta_video} type='video/mp4' />
                  </video>
                  {/* <img src='/pasta-4.jpg' alt='full-screen-img' /> */}
                  <div className='swiper-content' data-swiper-parallax={2000}>
                    <div className='title-area'>
                      {/* title-area */}
                      <p className='tag'>ULTIMATE ITALIAN</p>
                      <a href='#' className='title'>
                        {' '}
                        PASTA{' '}
                      </a>
                      {/* title area */}
                    </div>
                    <p className='disc'>
                      Pasta is more than just a meal; it's a cultural experience
                      <br />
                      that embodies the essence of Italian cuisine
                      <br />
                      From classic spaghetti carbonara to
                      <br />
                      inventive fusilli with truffle sauce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-button-wrapper creative-button--wrapper'>
              <div
                className='swiper-button-next'
                tabIndex={0}
                role='button'
                aria-label='Next slide'
              ></div>
              <div
                className='swiper-button-prev'
                tabIndex={0}
                role='button'
                aria-label='Previous slide'
              ></div>
            </div>
            <div className='slider-pagination-area'>
              {/* <h5 className='slide-range one'>01</h5> */}
              <div className='swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal'>
                <span
                  className='swiper-pagination-progressbar-fill'
                  style={{
                    transform:
                      'translate3d(0px, 0px, 0px) scaleX(0.666667) scaleY(1)',
                    transitionDuration: '1500ms',
                  }}
                />
              </div>
              {/* <h5 className='slide-range three'>05</h5> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
