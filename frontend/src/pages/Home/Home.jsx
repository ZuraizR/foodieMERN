import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <ExploreMenu />
      <FoodDisplay />
      {/* See More Button to navigate to menu page */}
      <button className='see-more' onClick={() => navigate('/menu')}>
        See More
      </button>
    </div>
  )
}

export default Home
