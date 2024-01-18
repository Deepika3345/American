import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../Css/ProductCart.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCart = ({ product }) => {
    // console.log("i am form ", product)
    const { isLoading } = useSelector
    return (
        <>

            <div className="product-card ">
                <div className="card card-one">
                    <span id='image-section'>
                     <Link to={`/learnmore/${product?._id}`}>
                     <img style={{ marginLeft: "50px" }}
                            src={product.img}
                            alt="" />
                     </Link>
                        <button className="btn btn-md  wishlist-btn"><FavoriteBorderIcon id='wishlist' /></button>
                    </span>
                    {/* <h5>{product.product}</h5> */}
                    <h4>PRICE:{product.price}</h4>
                    <button className="btn btn-lg w-100 btn-dark  rounded-5" style={{ fontSize: "16px" }}>ADD TO CART</button>
                    
                </div>

            </div>

        </>
    )
}

export default ProductCart