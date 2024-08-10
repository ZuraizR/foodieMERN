import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const StoreContext = createContext(null)

const StoreContextProvider = ({ children }) => {
  // server URL
  const url = 'http://localhost:4000'
  // food list items state
  const [food_list, setFoodList] = useState([])
  // Cart Product Items State
  const [cartItems, setCartItems] = useState({})
  // Menu Items Category State
  const [category, setCategory] = useState('All')
  // Show LoginPopup State
  const [showLogin, setShowLogin] = useState(false)
  // Current Login/Signup State
  const [currState, setCurrState] = useState('Login')
  // Filter Search Results State
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredItems, setFilteredItems] = useState(food_list)
  // Load More State -- Initial is 4
  const [visibleItemsCount, setVisibleItemsCount] = useState(4)
  // Max Price Range State -- Initial is 4
  const [maxPrice, setMaxPrice] = useState(20) // Initial max price for slider
  const [filter, setFilter] = useState('') // Initial max price for slider
  // User Token State
  const [token, setToken] = useState('')

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/food/list`)
      setFoodList(response.data.data)
      // console.log(food_list)
    } catch (error) {
      console.log(error)
    }
  }
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + '/cart/get',
      {},
      { headers: { token } }
    )
    setCartItems(response.data.cartData)
  }

  useEffect(() => {
    async function loadData() {
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        await loadCartData(localStorage.getItem('token'))
      }
    }
    loadData()
    fetchFoodList()
    getTotalCartAmount()
  }, [])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    if (token) {
      await axios.post(url + '/cart/add', { itemId }, { headers: { token } })
    }
    toast.success('Added Successfully', {
      draggable: true,
      autoClose: 1500,
      closeOnClick: true,
    })
  }

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (token) {
      await axios.post(url + '/cart/remove', { itemId }, { headers: { token } })
    }
    toast.success('Removed Successfully', {
      draggable: true,
      autoClose: 1800,
      closeOnClick: true,
    })
  }

  // remove all from cart
  // const removeFromCart = async (itemId) => {
  //   setCartItems((prev) => {
  //     const { [itemId]: removedItem, ...updatedCart } = prev
  //     return updatedCart
  //   })
  //   if (token) {
  //     await axios.post(url + '/cart/remove', { itemId }, { headers: { token } })
  //   }
  //   toast.success('Removed Successfully', {
  //     draggable: true,
  //     autoClose: 1800,
  //     closeOnClick: true,
  //   })
  // }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = food_list.find((product) => product._id === item)
          totalAmount += itemInfo.price * cartItems[item]
          // console.log(cartItems[item] * itemInfo.price)
        } catch (error) {
          console.log(error)
        }
      }
    }
    return totalAmount
  }

  const handleFilterChange = (value) => {
    // const value = e.target.value.toLowerCase()
    setSearchTerm(value)

    const filtered = food_list.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
    )
    setFilteredItems(filtered)
    setVisibleItemsCount(4)
  }

  const loadMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 4)
  }

  const contextValue = {
    food_list,
    cartItems,
    category,
    showLogin,
    currState,
    searchTerm,
    filteredItems,
    visibleItemsCount,
    maxPrice,
    filter,
    url,
    token,
    setToken,
    setFilter,
    setMaxPrice,
    setVisibleItemsCount,
    setFilteredItems,
    setSearchTerm,
    setCurrState,
    setShowLogin,
    setCategory,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    handleFilterChange,
    loadMoreItems,
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
