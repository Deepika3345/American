import React from 'react'
import interOne from '../assets/images/inter-one.webp'
import interTwo from '../assets/images/inter-two.svg'
import interThree from '../assets/images/inter-three.png'
import interFour from '../assets/images/inter-four.svg'
import '../Css/InterNation.css'
const InterNation = () => {
  return (
  
    <div className="tilt-container" id='tilt-container'>
        <div className='globe' id='interOne'>
            <img src={interOne} alt="" />
            <h5>International Warranty</h5>
            <p id='para'>American Tourister is a trusted global brand offering high-quality travel products like luggage, backpacks, and accessories. With a presence in 120+ countries, it's a go-to for millions of travelers.</p>


        </div>
        <div className='globe' id='interTwo'>
            <img src={interTwo} alt="" />
            <h5>Fast Delivery</h5>
            <p id='para'>We deliver online orders to most of India within 5-7 working days via efficient courier services.</p>


        </div>
        <div className='globe' id='interThree'>
            <img src={interThree} alt="" />
            <h5>Trusted Globally Since 1933</h5>
            <p id='para'>American Tourister innovates with award-winning luggage produced with world-class quality standards.</p>


        </div>
        <div className='globe' id='interFour'>
            <img src={interFour} alt="" />
            <h5>Full Original Store</h5>
            <p id='para'>One-stop shop for exploring the complete American Tourister collection online.</p>


        </div>
    </div>
   
  )
}

export default InterNation