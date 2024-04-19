import React, { useState } from 'react'
import Commonsection from '../Component/commonSection/Commonsection'
import "../Assets/css/fooddetail.css"
import { useParams } from 'react-router-dom'
import products from '../Assets/Fackdata/products'
import ProductCard from './category/ProductCard'


export default function FoodDetail() {
  const { id } = useParams();
  const Product = products.find((product) => product.id === id)
  console.log(Product);

  const {title,image01,image02,image03,price,category,desc} = Product

  const [previewImg,setPreviewImg] = useState(image01) 

  const [tab,setTab] = useState("desc")

  const relatedProducts = products.filter((item) => item.category === category && item.id !== id);
  return (
    <div>
      <Commonsection title={title}></Commonsection>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-2'>
            <div className='w-100 my-auto'>
              <img src={image01} alt="burger" className='w-75 ' onClick={()=> setPreviewImg(image01)}/>
              <img src={image02} alt="burger" className='w-75 ' onClick={()=> setPreviewImg(image02)}/>
              <img src={image03} alt="burger" className='w-75 ' onClick={()=> setPreviewImg(image03)}/>
            </div>
          </div>
          <div className='col-5 d-flex'>
            <div className='w-100 my-auto'>
              <img src={previewImg} alt="burger" className='w-75' />
            </div>
          </div>
          <div className='col-5 d-flex'>
            <div className='my-auto'>
              <h1 className='display-5 fw-bolder'>{title}</h1>
              <span className='d-flex text-danger mt-5'><p className='me-3'>Price:</p><h2>${price}</h2></span>
              <span className='d-flex'><p className='me-3 p-2'>Category:</p><p className='p-2 bg-light'>{category}</p></span>
              <button className='btn btn-danger fs-4 mt-4'>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='my-5 py-5'>
          <h2 className='text-center'>Related Items</h2>
          <div>
            <div className='row mt-5'>
            {
              relatedProducts.map((item)=>{
                return(
                  <div className='col-md-3' key={item.id}>
                    <ProductCard item={item}></ProductCard>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
        <div className='d-flex mt-5'>
          <p className={`${tab === 'desc' ? 'text-danger fw-bold' : ''}`}  onClick={()=> setTab("desc")}>Description</p>
          <p className={`px-5 ${tab === 'rev' ? 'text-danger fw-bold' : ''}`} onClick={()=> setTab("rev")}>Review</p>
        </div><hr />
        {
        tab === "desc" ? (<div className='my-5'>
          {desc}
        </div>):(<div>
          <div>
            <p className='fw-bold'>XYZ</p>
            <p className='fw-bold'>xyz1@gmail.com</p>
            <p className='fs-3 py-2'>Great Product</p>
          </div>
          <div>
            <p className='fw-bold'>XYZ</p>
            <p className='fw-bold'>xyz2@gmail.com</p>
            <p className='fs-3 py-2'>Great Product</p>
          </div>
          <div>
            <p className='fw-bold'>XYZ</p>
            <p className='fw-bold'>xyz3@gmail.com</p>
            <p className='fs-3 py-2'>Great Product</p>
          </div>
        </div>)
        }
        
        <div className=''>
          <div className='w-50 mx-auto fooddetail-bg p-5'>
            <input type="text" placeholder='Enter Your Name' className='w-100 p-2 input fooddetail-bg' />
            <input type="text" placeholder='Enter Your Name' className='w-100 p-2 input my-5 fooddetail-bg' />
            <label>Enter Your Name</label>
            <textarea rows="5" className='w-100 input fooddetail-bg'></textarea>
            <button className='btn btn-danger fs-4 px-3 mt-5'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
