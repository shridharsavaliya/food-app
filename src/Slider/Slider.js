import React from 'react'
import Slider from "react-slick";
import ava1 from "../Assets/images/ava-1.jpg"
import ava2 from "../Assets/images/ava-2.jpg"
import ava3 from "../Assets/images/ava-3.jpg"

export default function Sliderr() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
       <Slider {...settings}>
      <div>
      <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, impedit eaque officiis cumque ullam magni commodi. Reiciendis, blanditiis cumque?</p>
              <div className='d-flex align-items-center'>
                <img src={ava1} alt="" className='ava'/>
                <p className='my-0 ms-4 fw-bold'>Jhon Deo</p>
              </div>
      </div>
      <div>
      <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, impedit eaque officiis cumque ullam magni commodi. Reiciendis, blanditiis cumque?</p>
              <div className='d-flex align-items-center'>
                <img src={ava2} alt="" className='ava'/>
                <p className='my-0 ms-4 fw-bold'>Jhon Deo</p>
              </div>
      </div>
      <div>
      <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, impedit eaque officiis cumque ullam magni commodi. Reiciendis, blanditiis cumque?</p>
              <div className='d-flex align-items-center'>
                <img src={ava3} alt="" className='ava'/>
                <p className='my-0 ms-4 fw-bold'>Jhon Deo</p>
              </div>
      </div>
    </Slider>
    </div>
  )
}
