import React, { useState } from 'react'
import Helmet from '../Component/Helmet'
import "../Assets/css/allfood.css"
import Commonsection from '../Component/commonSection/Commonsection'
import ProductCard from './category/ProductCard'
import products from '../Assets/Fackdata/products'
import ReactPaginate from 'react-paginate'

export default function Allfood() {
  const [pageNumber, setPageNumber] = useState(0)
  const [category, setCategory] = useState('')
  const [sortBy, setSortBy] = useState('');  

  const filter = products.filter(item => item.category.toLowerCase().includes(category.toLowerCase()))
 
  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;

  let sortedProducts = [...filter];
  if (sortBy === 'alphabet') {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'reverseAlphabet') {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortBy === 'lowToHigh') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'highToLow') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  const displayProduct = sortedProducts.slice(visitedPage, visitedPage + productPerPage)

  const pageCount = Math.ceil(products.length / productPerPage)

  const changePage = ({selected}) =>{
    setPageNumber(selected)
  }

  const searchHandler = (e) =>{
    const search = e.target.value.toLowerCase()
    setCategory(search);
  }
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <div >
      <Helmet title='foods'>
        <Commonsection title="All Foods"></Commonsection>
        <div className='container my-5 py-5'>
          <div className='d-flex justify-content-between mb-5'>
            <div className='d-flex'>
            <input type="text" placeholder='I am Looking For...' className='form-control fs-4' value={category} onChange={searchHandler}/>
            <button className='btn btn-danger fs-4 ms-2'>Search</button>
            </div>
            <div>
              <label className='me-2'>Filter:</label>
              <select onChange={handleSortBy}>
                <option value="">None</option>
                <option value="alphabet">A to Z</option>
                <option value="reverseAlphabet">Z to A</option>
                <option value="lowToHigh">Low To High</option>
                <option value="highToLow">High To Low</option>
              </select>
            </div>
          </div>
        <div className='row'>
            {
              displayProduct.map((item)=>{
                return(
                  <div className='col-md-3' key={item.id}>
                    <ProductCard item={item}></ProductCard>
                  </div>
                )
              })
            }
            <div>
              <ReactPaginate pageCount={pageCount} onPageChange={changePage} previousLabel={"Prev"} nextLabel={"Next"} containerClassName='paginationbttns'></ReactPaginate>
            </div>
            </div>
        </div>
      </Helmet>
    </div>
  )
}
