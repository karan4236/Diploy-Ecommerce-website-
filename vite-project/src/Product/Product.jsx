import React from 'react'
import image1 from "../assets/Img/image1.jpg";
import "./Product.css";

const Product = ({name,price,image,id}) => {
  return (
    <div className='Product'>
        <img src={image} alt="product name" />
        <div className='product-details'>
            <span className='name '>{name}</span>
            <span className='price'>{price}</span>
            <button>Add +</button>
        </div>
    </div>
  )
}

export default Product