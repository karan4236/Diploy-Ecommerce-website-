import React from "react";
import { FaShopify } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import "./nav.css";

const nav = () => {
  return (
    <div className="nav">
      <div className="top-nav">
        <div className="logo">
          <span>V-Shop</span>
          <FaShopify />
        </div>
        <form className="search-box">
          <input type="text" placeholder="search items.."></input>
          <button>
            <IoSearch />
          </button>
        </form>
        <div className="cart-box">
          <FaShoppingCart />
          <span>0</span>
        </div>
      </div>
      <div className="bottom-nav">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default nav;
