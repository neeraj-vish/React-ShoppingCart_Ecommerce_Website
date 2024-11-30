import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { items } from "./data";
import { BsCartCheckFill } from "react-icons/bs";

const Navbar = ({ setData ,cart}) => {
  const filterByCategory = (category) => {
    const element = items.filter((d) => d.category === category);
    setData(element);
  };
  const filterByPrice = (price) => {
    const element = items.filter((d) => d.price >= price);
    setData(element);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location=useLocation();

  const handleInput = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm(""); // Reset searchTerm state to an empty string
  };
  
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <div className="brand">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              E-Commerce
            </Link>
          </div>
          <form className="search-bar" onSubmit={handleInput}>
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <div className="cart">
            <Link
              to={"/cart"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button type="button" className="btn btn-primary position-relative">
              <BsCartCheckFill style={{fontSize:'1.5rem'}} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        </div>

       {location.pathname=='/' && (
        <div className="nav-bar-wrapper">
        <div className="items">Filter by {"->"}</div>
        <div className="items" onClick={() => setData(items)}>
          No Filter
        </div>
        <div className="items" onClick={() => filterByCategory("mobiles")}>
          Mobiles
        </div>
        <div className="items" onClick={() => filterByCategory("laptops")}>
          Laptops
        </div>
        <div className="items" onClick={() => filterByCategory("tablets")}>
          Tablets
        </div>
        <div className="items" onClick={() => filterByPrice(29999)}>
          {">="}29999
        </div>
        <div className="items" onClick={() => filterByPrice(49999)}>
          {">="}49999
        </div>
        <div className="items" onClick={() => filterByPrice(69999)}>
          {">="}69999
        </div>
        <div className="items" onClick={() => filterByPrice(89999)}>
          {">="}89999
        </div>
      </div>
       )}
        
      </header>
    </>
  );
};

export default Navbar;
