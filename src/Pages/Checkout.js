import React, { useState } from 'react'
import Commonsection from '../Component/commonSection/Commonsection'
import "../Assets/css/checkout.css"
import { useSelector } from 'react-redux'
import Pdf from './Pdf'


export default function Checkout() {

  const totalamount = useSelector(state => state.items.totalPrice)
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    number: '',
    city: '',
    country: '',
    postal: '',
    submitpdf:false
  })

  const formSubmit = (e) =>{
    e.preventDefault();
    setFormdata({
    name: e.target.name.value,
    email: e.target.email.value,
    number: e.target.number.value,
    city: e.target.city.value,
    country: e.target.country.value,
    postal: e.target.postal.value,
    submitpdf:true

    })
  }

  return (
    <div>
      <Commonsection title="Checkout"></Commonsection>
      <div>
        {
          formdata.submitpdf === false ? (
            <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-md-7'>
            <h3>Shipping Address</h3>
            <div className='mt-2 mb-5'>
              <form onSubmit={formSubmit}>
              <input type="text" placeholder='Enter Your Name' className='w-100 border-0 border-bottom checkout-input' name='name' />
              <input type="text" placeholder='Enter Your Email' className='w-100 border-0 border-bottom checkout-input' name='email' />
              <input type="tel" placeholder='Phone Number' className='w-100 border-0 border-bottom checkout-input' name='number' />
              <input type="text" placeholder='City' className='w-100 border-0 border-bottom checkout-input' name='city' />
              <input type="text" placeholder='Country' className='w-100 border-0 border-bottom checkout-input' name='country' />
              <input type="text" placeholder='Postal Code' className='w-100 border-0 border-bottom checkout-input' name='postal' />
              <div className='my-5 d-flex justify-content-evenly'>
                <button className='btn btn-danger fs-4'>Payment</button>
                <input type="submit" className='btn btn-danger fs-4 px-4' value="Get Pdf"/>
              </div>
              </form>
            </div>

          </div>
          <div className='col-md-5'>
            <div className='d-flex justify-content-between'>
              <div className='px-5 mx-5'>
                <h4>Subtotal</h4>
                <h4 className='my-4'>Shipping</h4>
                <h3 className='fs-2'>Total:</h3>
              </div>
              <div className='px-5'>
                <h4>${totalamount}</h4>
                <h4 className='my-4'>{totalamount !== 0 ? "$35" : "$0"}</h4>
                <h3>${totalamount !== 0 ? Number(35) + totalamount : 0}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
          ) : <Pdf data={formdata}></Pdf>
        }
      </div>
    </div>
  )
}
