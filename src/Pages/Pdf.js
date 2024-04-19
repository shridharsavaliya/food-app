import React from 'react'
import { usePDF } from 'react-to-pdf';
import { useSelector } from 'react-redux'


export default function Pdf(props) {
    const currentdate = new Date();
    const { toPDF, targetRef } = usePDF({ filename: props.data.name });
    const cartitem = useSelector(state => state.items.cartItems)
    const totalQuantity = useSelector(state => state.items.totalQuantity)
    const totalPrice = useSelector(state => state.items.totalPrice)
    return (
        <div>
            <div ref={targetRef}>
                <div className='container'>
                    <div className=' w-75 mx-auto my-5 pt-5 shadow-lg'>
                        <h1 className='text-center'>Food Master</h1>
                        <div className='d-flex justify-content-center mt-4'>
                            <p className='mx-1'>Date: {currentdate.toDateString()}</p>
                            <p className='mx-2'>Time: {currentdate.toLocaleTimeString()}</p>
                        </div>
                        <div className='w-75 mx-auto'>
                            <table className='table'>
                                <tr>
                                    <td>Name:</td>
                                    <td>{props.data.name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{props.data.email}</td>
                                </tr>
                                <tr>
                                    <td>Mo.:</td>
                                    <td>{props.data.number}</td>
                                </tr>
                                <tr>
                                    <td>City:</td>
                                    <td>{props.data.city}</td>
                                </tr>
                                <tr>
                                    <td>Country:</td>
                                    <td>{props.data.country}</td>
                                </tr>
                                <tr>
                                    <td>Postal:</td>
                                    <td>{props.data.postal}</td>
                                </tr>
                            </table>
                        </div>
                        <div className='px-5 mx-3'>
                            <table className='table table-striped'>
                                <thead>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    {
                                        cartitem.map((item) => {
                                            return (
                                                <tr item={item}>
                                                    <td>{item.title}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>${item.price}</td>
                                                    <td>${item.price * item.quantity}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className='fw-bold fs-3'>Total:</td>
                                        <td className='fw-bold'>{totalQuantity}</td>
                                        <td></td>
                                        <td className='fw-bold'>${totalPrice}</td>
                                    </tr>
                                </tbody>    
                            </table>
                            <div className='my-5'>
                                    <h4>TotalAmount: ${totalPrice}</h4>
                                    <h4>Shipping Charge: {totalPrice !== 0 ? "$35" : "$0"}</h4>
                                    {/* <h4>Shipping Charge:${totalPrice !== 0 ? Number(35) + totalPrice : 0}</h4> */}
                                </div>
                                <div className='text-center pb-5'>
                                    <h1>Final Amount : ${totalPrice !== 0 ? Number(35) + totalPrice : 0}</h1>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='btn btn-danger fs-4' onClick={() => toPDF()}>Download Pdf</button>
            </div>
        </div>
    )
}
