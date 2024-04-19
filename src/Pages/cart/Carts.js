import React from 'react'
import CartItem from './CartItem'
import { useDispatch,useSelector } from 'react-redux'
import { cartUiAction } from '../../Store/Slice/CartSliceUi'
import "../../Assets/css/carts.css"
import { Link } from 'react-router-dom'

export default function Carts() {

  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(cartUiAction.toggle())
  }
  const cartproduct = useSelector(state => state.items.cartItems)
  const totalPrice = useSelector(state => state.items.totalPrice)


  return (
    <div>
        <div className='smenu'>
          <div>
            <div className='justify-content-start d-flex p-4' onClick={toggleCart}>
              <p className='rounded-circle bg-dark text-white px-3 pb-2'>x</p>
            </div>
          </div>
          <div>
            {
              cartproduct.map((item)=>{
                return <CartItem item ={item}></CartItem>

              })
            }
          </div>
          <div className="bg-danger w-100 py-4 d-block justify-content-center   px-3 cart-bottom">    
            <div className="mt-2 ">
              <h3 className="text-white">Subtotal Amount: <span>${totalPrice}</span></h3>
            </div>
            <div className='mt-3'>
              <Link to="/checkout">
              <button className="btn btn-light fw-bold text-dark fs-5">CheckOut</button>
              </Link>
            </div>
          </div>
        </div> 
    </div>
  )
}
