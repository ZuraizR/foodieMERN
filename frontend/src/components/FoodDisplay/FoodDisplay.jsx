import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = () => {
  const {
    category,
    filteredItems,
    setFilteredItems,
    food_list,
    visibleItemsCount,
  } = useContext(StoreContext)

  useEffect(() => {
    setFilteredItems(food_list)
  }, [food_list])

  return (
    <div className='food-display container' id='food-display'>
      <div className='food-display-list'>
        {filteredItems.length === 0 ? (
          <div className='no-items'>
            <h4>No Items to Show</h4>
            <p>Try adjusting your filters or check back later.</p>
          </div>
        ) : (
          filteredItems.slice(0, visibleItemsCount).map((item, index) => {
            if (category === 'All' || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            }
            return null // Return null for unmatched categories
          })
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
