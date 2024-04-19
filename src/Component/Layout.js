import React from 'react'
// import Router from '../Routes/Router'
import Header from './Header'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Allfood from '../Pages/Allfood'
import Cart from '../Pages/Cart'
import Contact from '../Pages/Contact'
import FoodDetail from '../Pages/FoodDetail'
import Carts from '../Pages/cart/Carts'
import { useSelector } from 'react-redux'
import Checkout from '../Pages/Checkout'

export default function Layout() {
  const carttoggle = useSelector(state => state.cartUi.cartIsVisible)
  return (
    <div>
       {
      carttoggle === true ?  <Carts></Carts> : " "
     }
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/foods' element={<Allfood></Allfood>}></Route>
          <Route path='cart' element={<Cart></Cart>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/fooddetail/:id' element={<FoodDetail></FoodDetail>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  )
}
