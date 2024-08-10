import React, { useContext, useEffect } from 'react'

import './Menu.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import SideBar from '../../components/SideBar/SideBar'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { StoreContext } from '../../context/StoreContext'

const Menu = () => {
  const { loadMoreItems, category } = useContext(StoreContext)

  const handleScrollEventListener = (footerHeight) => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight - 800
      ) {
        loadMoreItems()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const footerEl = document.querySelector('.footer')
    const footerHeight = footerEl.offsetHeight
    window.addEventListener('scroll', () =>
      handleScrollEventListener(footerHeight)
    )
    return () => window.removeEventListener('scroll', handleScrollEventListener)
  }, [category])

  return (
    <>
      <div className='menu-heading overlay'>Our Menu</div>
      <ExploreMenu />
      <div className='food-display container' id='food-display'>
        <h2 className='heading-underline our-menu-heading'>Our Menu</h2>
        <div className='display-grid'>
          <SideBar />
          <FoodDisplay />
        </div>
      </div>
    </>
  )
}

export default Menu
