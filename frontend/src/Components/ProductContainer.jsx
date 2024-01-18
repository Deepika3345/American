import React, { useEffect } from 'react'
import ProductCart from './ProductCart'
import '../Css/ProductContainer.css'
import { fetchProducts } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'

// import { useDispatch, useSelector } from 'react-redux'

const ProductContainer = () => {
    const { products, isLoading } = useSelector(state => state.bag)
    // console.log(' data products', products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])




    return (
        <div className="menu   ">
            <h3 id='shop-product'>
                <span style={{ borderBottom: "6px solid red", }}>  Shop</span> products
            </h3>
            <span className='button-holder'>
                <button class="button type1" id='most-popular'>
                    <span class="btn-txt"  >Most Popular</span>
                </button>
                <button class="button type1">
                    <span class="btn-txt">What's New</span>
                </button>
                <button class="button type1">
                    <span class="btn-txt">Best Seller</span>
                </button>
            </span>

            <div className='scrollmenu'    >
                {/* <ProductCart /> */}
                {
                    products?.map((product) => <ProductCart key={product._id} product={product} />)
                }

            </div>
        </div>

    )
}

export default ProductContainer