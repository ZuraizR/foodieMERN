import React, { useContext } from 'react'
import './SideBar.css'

import { menu_list } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Sidebar = () => {
  const {
    category,
    setCategory,
    handleFilterChange,
    searchTerm,
    setSearchTerm,
    setFilteredItems,
    maxPrice,
    setMaxPrice,
    setVisibleItemsCount,
    filter,
    food_list,
  } = useContext(StoreContext)

  const clearFilters = () => {
    setCategory('All')
    setSearchTerm('')
    setFilteredItems(food_list)
    setMaxPrice(20)
  }

  const handlePriceChange = (e) => {
    const price = parseInt(e.target.value, 10)
    setMaxPrice(price)

    filterItems(filter, price)
  }

  const filterItems = (searchTerm, price) => {
    console.log(searchTerm, price)
    const filtered = food_list.filter(
      (item) =>
        (item.name.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm)) &&
        item.price <= price
    )

    setFilteredItems(filtered)
    // setVisibleItemsCount(4) // Reset visible items when filtering
  }

  const sliderBackground = {
    background: `linear-gradient(to right, #007bff 0%, #007bff ${
      (maxPrice * 100) / 30
    }%, #ddd ${(maxPrice * 100) / 30}%, #ddd 100%)`,
  }

  //   const filteredCategories = food_list.filter((item) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   console.log(filteredCategories)

  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <h2>Filter Food</h2>
      </div>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search categories...'
          value={searchTerm}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
      </div>
      <ul className='categories'>
        {menu_list.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type='checkbox'
                className='category-checkbox'
                checked={category.includes(item.menu_name)}
                onChange={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? 'All' : item.menu_name
                  )
                }
              />
              {item.menu_name}
            </label>
          </li>
        ))}
      </ul>
      <hr />
      <div className='price-filter'>
        <label htmlFor='priceRange'>Price: ${maxPrice}</label>
        <input
          type='range'
          id='priceRange'
          min='0'
          max='30'
          step='1'
          value={maxPrice}
          onChange={handlePriceChange}
          style={sliderBackground}
        />
      </div>
      <button className='clear-filters' onClick={clearFilters}>
        Clear Filters
      </button>
    </aside>
  )
}

export default Sidebar
