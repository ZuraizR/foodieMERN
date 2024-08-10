import React, { useContext } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <LazyLoadImage
          className='food-item-image'
          src={`${url}/images/` + image}
          alt='food_image'
        />
        {!cartItems[id] ? (
          <img
            className='add'
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt='add_icon'
            title='Add Item'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt='remove_icon'
              title='Remove Item'
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt='add_icon'
              title='Add Item'
            />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='rating_stars' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
