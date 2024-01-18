import React from 'react'
import childimage from '../assets/images/ChildImage.webp'

const SecondSection = () => {
    return (
        <section className='main-girls'>
            <div className='image-one-girls'>
                <img src={childimage} alt="" />

            </div>
            <div className='text-one-girls'>
                <h4><span style={{ borderBottom: "5px solid red" }}>New </span>  Arrivals</h4>
                <p style={{ fontSize: "15px" }}>
                Shop new carry-on luggage to backpacks. Freshen up your next trip with the latest in luggage and travel gear.
                    </p>
                <button className="btn btn-lg w-50 shadow-lg rounded-5" id='shop-btn'>Shop Now</button>
            </div>
        </section>
    )
}

export default SecondSection