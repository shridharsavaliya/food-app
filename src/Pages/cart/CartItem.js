import React from 'react'
import '../../Assets/css/carts.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../Store/Slice/CartSlice'


export default function CartItem(props) {
  const { image01, price, quantity, title, id } = props.item
  const dispatch = useDispatch()
  const inc = () => {
    dispatch(cartAction.Add({
      title, image01, price, id, quantity
    }))
  }
  const dec = () => {
    dispatch(cartAction.Remove({
      title, image01, price, id, quantity
    }))
  }
  const del = () => {
    dispatch(cartAction.Delete({
      title, image01, price, id, quantity
    }))
  }



  return (
    <div className='my-3'>
      <div className='d-flex mx-3'>
        <div className='col2'>
          <img src={image01} alt="" className='w-100' />
        </div>
        <div className='col8'>
          <div className="w-75 mx-auto">
            <div className=''>
              <h3>{title}</h3>
              <div className='d-flex'>
                <p>{quantity} x</p>
                <p className='text-danger fw-bold px-5'>${price * quantity}</p>
              </div>
              <div>
                <p><span className='bg-light p-2'><span className='fs-2' onClick={inc}>+</span><span className='px-5'>{quantity}</span><span className='fs-2' onClick={dec}>-</span></span></p>
              </div>
            </div>
          </div>
        </div>
        <div className='col2 my-auto'>
          <div className='justify-content-end d-flex'>
            <p className='rounded-circle bg-dark text-white px-3 pb-2' onClick={del}>x</p>
          </div>
        </div>
      </div>

    </div>
  )
}
