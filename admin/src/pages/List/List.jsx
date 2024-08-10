import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { toast } from 'react-toastify'
import axios from 'axios'

import './List.css'

const List = ({ url }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error(response.data.message)
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/food/remove`, { id: foodId })
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    // <div className='list add flex-col'>
    //   <p>All Foods List</p>
    //   <div className='list-table'>
    //     <div className='list-table-format title'>
    //       <b>Image</b>
    //       <b>Name</b>
    //       <b>Category</b>
    //       <b>Price</b>
    //       <b>Action</b>
    //     </div>
    //     {list.map((item, index) => {
    //       return (
    //         <div key={index} className='list-table-format'>
    //           <img src={`${url}/images/` + item.image} alt='img' />
    //           <p>{item.name}</p>
    //           <p>{item.category}</p>
    //           <p>{item.price}</p>
    //           <p className='cursor'>X</p>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
    <div className='food-table-container'>
      <h2>All Foods List</h2>
      <table className='food-table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>
                {/* <img
                  src={`${url}/images/` + item.image}
                  alt={item.name}
                  className='food-image'
                /> */}
                <LazyLoadImage
                  src={`${url}/images/` + item.image}
                  alt={item.name}
                  effect='blur' // Optional: use blur effect
                  placeholderSrc='https://via.placeholder.com/100x100?text=Loading...'
                  className='food-image'
                />
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <td>
                <button
                  onClick={() => removeFood(item._id)}
                  className='delete-button'
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
