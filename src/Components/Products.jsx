import React from 'react';
import { MdCurrencyRupee } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ items,cart,setCart }) => {
  
  const AddTOCart=(id,title,imgSrc,description,price)=>{
   const obj={
    id,title,imgSrc,description,price
   }
   setCart([...cart,obj])
   toast.success('Item added on Cart !', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  
    });
  }
  
  return (
    <>

<ToastContainer
  position="top-right"
  autoClose={1500}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  
/>


    <div className="container my-5">
      <div className="row">
        {items.map((data) => (
          <div className="col-lg-4 col-md-6 my-3 text-center" key={data.id}>
            <div className="card" style={{ width: '18rem' }}>
              <Link
                to={`/products/${data.id}`}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <img src={data.imgSrc} className="card-img-top" alt="" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <button className="btn btn-primary mx-3">
                  {data.price} <MdCurrencyRupee />
                </button>
                <button className="btn btn-warning"  onClick={(event) => {
    event.preventDefault(); AddTOCart(data.id, data.title, data.imgSrc, data.description, data.price);
  }}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;
