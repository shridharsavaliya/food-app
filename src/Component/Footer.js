import React from 'react'
import "../Assets/css/footer.css"
import logo from "../Assets/images/res-logo.png"
import { CiLocationArrow1 } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaReddit } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-footer mt'>
      <div className='container'>
           <div className='row w-100 px-0 mx-0 pt'>
            <div className="col-md-4 col-sm-12">
              <div>
                <img src={logo} alt="" className='logo'/>
                <p className='fw-bold'>Tasty Treat</p>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla eos aliquam animi quibusdam quo.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <h1>Delivery Time</h1>
              <p className='fw-bold mt-4'>Sunday - Thursday</p>
              <p>10:00am - 11:00pm</p>
              <p className='fw-bold'>Friday - Saturday</p>
              <p>OffDay</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h1>Contact</h1>
              <p className='mt-4'>Location: Xyz, Varachha-395006, Surat</p>
              <p className='fw-bold mt-5'>Phone: 8896445676</p>
              <p className='fw-bold mt-4'>Email: Xyz768@gmail.com</p>
            </div>
          </div>
          <div className="row mt-5 pt-5">
             <div className='col-md-4'>
             <h1>Newsletter</h1>
              <h2 className='mt-4'>Subscribe our newsletter</h2>
              <div className='position-relative'>
              <input type="text" placeholder='Enter Your Email' className='w-100 footer-email-input mt-4'/>
                <button className='position-absolute btn btn-danger fw-bold btn-email' type='submit'><CiLocationArrow1 className=''/></button>
              </div>
             </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
            <p className='text-danger fw-bold'>Copyright - 2022,website made by shridhar savaliya .All Rights Reserved</p>
            </div>
            <div className="col-md-6">
              <div className='d-flex justify-content-around'>
              <p>FOLLOW: </p>
                <div className=''><CiFacebook className='bg-danger text-white w-100 fs-1 p-1 icon'/></div>
                <div className=''><FaReddit className='bg-danger text-white w-100 fs-1 p-1 icon'/></div>
                <div className=''><AiOutlineYoutube className='bg-danger text-white w-100 fs-1 p-1 icon'/></div>
                <div className=''><FaLinkedinIn className='bg-danger text-white w-100 fs-1 p-1 icon'/></div>
              </div>
            </div>
          </div>
    </div>
    </div>
  )
}
