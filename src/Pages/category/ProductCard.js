import React from 'react'
import { Link } from 'react-router-dom'
import "../../Assets/css/productcard.css"
import { useDispatch } from 'react-redux'
import { cartAction } from '../../Store/Slice/CartSlice'

export default function ProductCard(props) {

    const {id,title,price,image01} = props.item
    const dispatch = useDispatch()
    const additem = () =>{
        dispatch(cartAction.Add({
            id,title,price,image01 
        }))
    }

    return (
        <div className='container'>
            
                    <div className="card mb-3 ">
                        <img src={image01} className="card-img-top img-hover w-50 mx-auto p-3" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title text-center pb-5 fw-bold fs-4 font-size w-auto text-decoration-underline"><Link to={`/fooddetail/${id}`}>{title}</Link></h6>
                            <div className='d-flex'>
                                <p className="card-text me-auto text-danger fw-bold">${price}</p>
                                <button className='btn btn-danger ms-auto px-3 fs-5' onClick={additem}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
           
    )
}
