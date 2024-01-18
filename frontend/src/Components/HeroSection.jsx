import React from 'react'
import girlsImage from '../assets/images/heroSectionOne.webp'
import '../Css/HeroSection.css'

const HeroSection = () => {
    return (
        <>
            <section className='main-girls'>
                <div className='image-one-girls'>
                    <img src={girlsImage} alt="" />

                </div>
                <div className='text-one-girls'>
                    <h4><span style={{ borderBottom: "5px solid red" }}>Best </span>  Sellers</h4>
                    <p style={{ fontSize: "15px" }}>Shop American Tourister's best-sellers online. Discover the most popular, top-rated travel gear handpicked by American Tourister fans!</p>
                    <button className="btn btn-lg w-50 shadow-lg rounded-5" id='shop-btn'>Shop Now</button>
                </div>
            </section>
        </>
    )
}

export default HeroSection