import React from 'react'
import twingirls from '../assets/images/twogirls.png'

const TwinGirls = () => {
    return (
        <section className='main-girls'>
            <div className='image-one-girls'>
                <img src={twingirls} alt="" />

            </div>
            <div className='text-one-girls'>
                <h4><span style={{ borderBottom: "5px solid red" }}>Here </span>  For You</h4>
                <p style={{ fontSize: "15px" }}>
                Discover answers for our most frequently asked questions plus how to deal with any issue you might encounter.
                </p>
                <button className="btn btn-lg w-50 shadow-lg rounded-5" id='shop-btn'>Let Us Help</button>
            </div>
        </section>
    )
}

export default TwinGirls