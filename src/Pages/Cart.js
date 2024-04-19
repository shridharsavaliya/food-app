import React from 'react'
import Helmet from '../Component/Helmet'
import Commonsection from '../Component/commonSection/Commonsection'
import {useSelector,useDispatch} from 'react-redux'
import { cartAction } from '../Store/Slice/CartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const cartItem = useSelector(state => state.items.cartItems)
  const totalamount = useSelector(state => state.items.totalPrice)
  
  return (
    <div>
      <Helmet title="cart">
        <Commonsection title="Cart"></Commonsection>
        {
        cartItem.length === 0 ? (<h2 className='text-center text-danger mt'>Your cart is empty</h2>) 
        : <div className='container my-5'>
        <table className='table table-responsive'>
        <thead>
        <tr className='text-center'>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          {
            cartItem.map((item)=>{
              return  <Tr items={item}></Tr>
            })
          }
        </tbody>
        </table>
      </div>
      }
      <div className='container'>
          <h3>Subtotal:<span className='text-danger'>${totalamount}</span></h3>
          <p>Taxes and shipping will calculate at checkout</p>
          <div>
            <button className='btn btn-danger fs-4'><Link to='/foods' className='text-white'>Continue Shopping</Link></button>
            <button className='btn btn-danger fs-4 mx-3'><Link to='/checkout' className='text-white'>Proceed to checkout</Link></button>
          </div>
      </div>
      </Helmet>
    </div>
  )
}

const Tr = (props) => {
  const {price,image01,quantity,title,id} = props.items;
  const dispatch = useDispatch()

  const del = () =>{
    dispatch(cartAction.Delete({
        image01,title,price,quantity,id
    }))
  }
return(
  <tr className='text-center'>
  <td><img src={image01} className='w-img-cart' alt="" /></td>
  <td>{title}</td>
  <td>{price}</td>
  <td>{quantity}</td>
  <td><button className='btn btn-danger' onClick={del}>Delete</button></td>
</tr>
)
}
