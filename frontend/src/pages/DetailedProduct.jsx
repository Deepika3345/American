import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../features/products/productSlice'
import '../Css/DetailedProduct.css'


const DetailedProduct = () => {
    const { ID } = useParams()
    const { products } = useSelector((state) => state.bag)

    // const [itemDetail,setitem]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    console.log(ID)
    console.log(products)

    const itemDetail = products.filter((product) => product?._id === (ID))[0]
    // const itemDetail = coins.filter((coin) => coin.item.coin_id === Number(ID))[0]?.item
    console.log({ itemDetail })



    return (
        <>
            <section className='container-detail'>
                <div className='whole-detail'>
                    <div className='detailcard-img'>
                        <img src={itemDetail?.img} alt="" />
                    </div>
                    <div className='detailcard-txt'>
                        <span className='txt-detail'>
                        <h1>{itemDetail?.product}</h1>
                        <h5>{itemDetail?.size}</h5>
                        <p>{itemDetail?.description}</p>
                        <h4>Price:{itemDetail?.price}</h4>
                        
                        <span style={{display:"flex" , justifyContent:"space-between"}}>
                       
                        <button className="btn btn-dark  rounded-5 " id='drk-btn'>BUY NOW</button>
                        <button className="btn btn-dark  rounded-5 " id='drk-btn'>Continue Shopping</button>
                        

                       </span>
                        </span>

                    </div>
                </div>

            </section>
        </>
    )
}

export default DetailedProduct