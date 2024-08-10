import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Menu from './pages/Menu/Menu'
import NotFound from './pages/NotFound/NotFound'
import LoginPopup from './components/LoginPopup/LoginPopup'
import SideBar from './components/SideBar/SideBar'
import { StoreContext } from './context/StoreContext'
import Test from './components/test'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {
  const { showLogin, setShowLogin } = useContext(StoreContext)

  return (
    <>
      {showLogin && <LoginPopup />}
      <div>
        <ScrollToTop />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/sidebar' element={<SideBar />} />
          <Route path='/test' element={<Test />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
    </>
  )
}

export default App
