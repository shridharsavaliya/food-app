import React, { useEffect, useState } from 'react'
import "../Assets/css/home.css"
import hero from "../Assets/images/hero.png"
import c1 from "../Assets/images/category-01.png"
import c2 from "../Assets/images/category-02.png"
import c3 from "../Assets/images/category-03.png"
import c4 from "../Assets/images/category-04.png"
import s1 from "../Assets/images/service-01.png"
import s2 from "../Assets/images/service-02.png"
import s3 from "../Assets/images/service-03.png"
import bread from "../Assets/images/bread.png"
import hamburger from "../Assets/images/hamburger.png"
import pizza from "../Assets/images/pizza.png"
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoCarSharp } from "react-icons/io5";
import ProductCard from './category/ProductCard'
import product from "../Assets/Fackdata/products"
import Helmet from '../Component/Helmet'
import network from "../Assets/images/network.png"
import Sliderr from '../Slider/Slider'

// console.table(product);

export default function Home() {
  const [category,setCategory] = useState("All")
  const [allFoods,setAllFoods] = useState(product)
  const [hotPizza,setHotPizza] = useState([])

  useEffect(()=> {
    if(category ==='All'){
      setAllFoods(product)
    }
    if(category === "Burger"){
      const FilterProduct = product.filter((item)=>item.category === "Burger")
      setAllFoods(FilterProduct)
    }
    if(category === "Pizza"){
      const FilterProduct = product.filter((item)=> item.category === "Pizza")
      setAllFoods(FilterProduct)
    }
    if(category === "Bread"){
      const FilterProduct = product.filter((item)=> item.category === "Bread")
      setAllFoods(FilterProduct)
    }
  },[category])
  useEffect(()=>{
    const FilterPizza = product.filter((item) => item.category === 'Pizza')
    const PizzaSlice = FilterPizza.slice(2,6)
    setHotPizza(PizzaSlice)
  },[category])
  return (
    <div>
      <Helmet title="home">
      <div className="container">
        <div className='row mt'>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className='pe-md-5'>
              <p className='fw-bold h2 mb-4 text-center-md'>Easy Way to make an order</p>
              <p className='p2 text-center-md'><span className='text-danger'>HUNGRY?</span> Just wait<br></br>food at your door</p>
              <p className='mb-5 text-center-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis.</p>
              <div className='text-center-md'>
                <button className='ordernow-btn btn btn-danger me-5'>Order now</button>
                <button className='btn-white btn allfoods-btn text-danger'>See allfoods</button>
              </div>
              <div className='d-flex mt-5 pt-5 justi-cont-md'>
                <p className='c-p me-5'><IoShieldCheckmarkOutline className='shield-check me-3' /> 100% Secure Checkout</p>
                <p className='c-p'><IoCarSharp className='car-shipping me-3'/>No shipping charge</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src={hero} alt="" className='img-fluid' />
          </div>
        </div>
        <div className='row'>
          <div className="col-lg-3 col-sm-6">
            <div className='fastfood-bg'>
              <span className='fastfood-name'><img src={c1} alt="" className='fastfood-item me-4'/>Fastfood</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
          <div className='fastfood-bg'>
              <span className='fastfood-name'><img src={c2} alt="" className='fastfood-item me-4'/>Pizza</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
          <div className='fastfood-bg'>
              <span className='fastfood-name'><img src={c3} alt="" className='fastfood-item me-4'/>Asian Food</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
          <div className='fastfood-bg'>
              <span className='fastfood-name'><img src={c4} alt="" className='fastfood-item me-4'/>Row Meat</span>
            </div>
          </div>
        </div>
        <div className='mt'>
          <p className='text-center text-danger fw-bolder'>What we serve</p>
          <p className='text-center fw-bolder h1'>Just sit back at home</p>
          <p className='text-center fw-bolder h1'>We will <span className='text-danger'>take care</span></p>
          <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia?</p>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officia?</p>
        </div>
        <div className='row mt'>
          <div className="col-md-4 col-sm-12 col-12">
            <div className='mx-5 my-5'>
            <img src={s1} alt="" className='img-fluid w-25 mx-auto service'/>
            <p className='text-center fw-bold mt-3'>Quick Delivery</p>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, vel! Pariatur.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
            <div className="mx-5 my-5">
            <img src={s2} alt="" className='img-fluid w-25 mx-auto service'/>
            <p className='text-center fw-bold mt-3'>Supper Dine In</p>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, vel! Pariatur.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
           <div className="mx-5 my-5">
           <img src={s3} alt="" className='img-fluid w-25 mx-auto service'/>
            <p className='text-center fw-bold mt-3'>Easy Pick Up</p>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, vel! Pariatur.</p>
           </div>
          </div>
        </div>
        <div className="d-flex bg-danger  justify-content-center justify-content-md-evenly py-4 border-radius mt">
          <div className=" d-flex" >
            <button className={category === "All" ?"bg-white text-danger px-4 btn border-radius py-2 fs-3 ms-3 mb-0 align-items-center all" : ' text-white mb-0 btn fs-3 ms-3 '} onClick={()=> setCategory("All")}>All</button>
          </div>
          <div className=" d-block text-center d-md-flex align-items-center ">
          <img src={hamburger} alt="" className='food-menu-img'/>
          <button className={category === "Burger" ?"bg-white text-danger px-4 btn border-radius py-2 fs-3 ms-3 mb-0 align-items-center all" : ' text-white mb-0 btn fs-3 ms-3 '} onClick={()=> setCategory("Burger")}>Burger</button>
          </div>
          <div className="d-block text-center d-md-flex align-items-center ">
          <img src={pizza} alt="" className='food-menu-img'/>
          <button className={category === "Pizza" ?"bg-white text-danger px-4 btn border-radius py-2 fs-3 ms-3 mb-0 align-items-center all" : ' text-white mb-0 btn fs-3 ms-3 '} onClick={()=> setCategory("Pizza")}>Pizza</button>

          </div>
          <div className="d-block text-center d-md-flex align-items-center ">
          <img src={bread} alt="" className='food-menu-img' />
          <button className={category === "Bread" ?"bg-white text-danger px-4 btn border-radius py-2 fs-3 ms-3 mb-0 align-items-center all" : ' text-white mb-0 btn fs-3 ms-3 '} onClick={()=> setCategory("Bread")}>Bread</button>
          </div>
        </div>
      </div>
      <div className='mt-5 pt-3 container'>
            <div className='row'>
              {
              allFoods.map((item)=>{
              return(
                <div className='col-md-3' key={item.id}>
                  <ProductCard item={item}></ProductCard>
                </div>
              )
            })
          }
          <div className='my-5'>
            <h1 className='fw-bold display-4 text-center'>Hot Pizza</h1>
            <div className='row'>
            {
              hotPizza.map((item)=>{
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
            <div className='row mt'>
            <div className="col-md-6 col-sm-12">
              <p className='text-danger h1'>Testimonial</p>
              <p className='display-3 fw-bold my-4'>What our <span className='text-danger'>customer</span> are saying</p>
              <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur voluptatibus quibusdam dolore provident. Quibusdam.</p>
              <div>
                <Sliderr></Sliderr>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className=''>
                <img src={network} alt="" className='w-100 align-items-center' />
              </div>
            </div>
          </div>
      </div>
      </Helmet>
    </div>
  )
}
