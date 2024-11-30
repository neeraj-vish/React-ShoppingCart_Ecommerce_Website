import React from 'react'
import { MdCurrencyRupee } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cart = ({cart,setCart}) => {
  return (
    <>
      <div className="container my-5"  style={{width:'48%' }}>

      {cart.length == 0 ? (
  <>
    <div className='text-center'>
      <h1>Your Cart is Empty</h1>
      <Link to={'/'} className="btn btn-warning">Continue Shopping...</Link>
    </div>
  </>
) : 
  cart.map((d) => (
    <div className="card mb-3 my-5" style={{width:'700px'}} key={d.id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={d.imgSrc} className="img-fluid rounded-start" alt=""/>
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h5 className="card-title">{d.title}</h5>
            <p className="card-text">{d.description}</p>
            <button className="btn btn-primary mx-3">
              {d.price} <MdCurrencyRupee />
            </button>
            <button className="btn btn-warning">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  ))
}
      </div>

      {cart.length!=0 && (
        <div className="container text-center my-5" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <button className='btn btn-warning mx-5'>CheckOut</button>
        <button className='btn btn-danger' onClick={()=>setCart("")}>Clear Card</button>
      </div>
      ) }

      
    </>
  )
}

export default Cart
