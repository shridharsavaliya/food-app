import React, { useState } from 'react';
import logo from "../Assets/images/res-logo.png";
import "../Assets/css/header.css"
import { FaShoppingCart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { cartUiAction } from '../Store/Slice/CartSliceUi'


export default function Header() {
  const dispatch = useDispatch()
  const togglecart = () => {
    dispatch(cartUiAction.toggle())
  }
  
  const [show,setShow] = useState("menu")

  const cart = useSelector((state) => state.items.totalQuantity)
  return (
    <div>
      <div className="container">
        <div className="d-flex mt-4">
          <div className="col2 my-auto">
            <div className='text-center'>
              <img src={logo} alt="" className='img-fluid w-25 ' />
              <p className='fw-bold tasty '>Tasty Treat</p>
            </div>
          </div>
          <nav className="nav col8 my-auto">
            <ul className={`"d-block d-sm-flex justify-content-center " ${show}`}>
              <span className='d-block d-sm-none close-button' onClick={()=> setShow("menu")}>&times;</span>
              <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
              <li className="nav_item"><Link to="/foods" className="nav_link">Foods</Link></li>
              <li className="nav_item"><Link to="/cart" className="nav_link">Cart</Link></li>
              <li className="nav_item"><Link to="/contact" className="nav_link">Contact</Link></li>
            </ul>
          </nav>
          <div className="col2 my-auto">
            <div className='d-flex justify-content-end'>
              <button type="button" className="btn position-relative">
                <i className=" me-4  fs-2 position-relative" onClick={togglecart}><FaShoppingCart />
                  <span className='position-absolute cart text-white bg-danger fs-6  rounded-circle'>
                    {cart}
                  </span>
                </i>
              </button>
              <i className=" me-4 fs-1"><CiUser /></i>
              <i onClick={()=> setShow("smenu")} className="nav_toggler fs-1 d-block d-sm-none"><IoMenu /></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}