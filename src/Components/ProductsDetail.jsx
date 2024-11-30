import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './data';
import { MdCurrencyRupee } from 'react-icons/md';
import Products from './Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsDetail = ({cart,setCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

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

  useEffect(() => {
    const filterProduct = items.filter((data) => data.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (item) => item.category === filterProduct[0].category 
    );
    setRelatedProduct(relatedProducts);
  }, [id]);

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

      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">
            {product.price} <MdCurrencyRupee />
          </button>
          <button className="btn btn-warning"  onClick={(event) => {
    event.preventDefault(); AddTOCart(product.id, product.title, product.imgSrc, product.description, product.price);
  }}>Add to Cart</button>
        </div>
      </div>
     
       <h1 className='text-center'>Related Products</h1>
      <Products items={relatedProduct} cart={cart} setCart={setCart} />
    </>
  );
};

export default ProductsDetail;

