import React from 'react'
import bagcontainerOne from '../assets/images/bagcontainer-one.webp'
import bagcontainerTwo from '../assets/images/bagcontainer-two.webp'
import bagcontainerThree from '../assets/images/bagcontainer-three.webp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Css/BagContainer.css'

const BagContainer = () => {
    return (
        <>
            {/* <div className='contain'> */}
                <div className='tilt-container' >
                    <div className='first-circle' id='first-circle'>

                        <img id='carry-bag' src={bagcontainerOne} alt="" />
                        <button id='luggage-btn' className="btn btn-sm rounded-5">Luggage More <ArrowForwardIosIcon style={{fontSize:"17px"}}/></button>



                    </div>
                    <div className='first-circle' id='second-circle'>
                        <img id='carry-bag' src={bagcontainerTwo} alt="" />
                        <button id='luggage-btn' className="btn btn-sm rounded-5">Backpacks  More <ArrowForwardIosIcon style={{fontSize:"17px"}}/></button>


                    </div>
                    <div className='first-circle' id='third-circle'>
                        <img id='carry-bag' src={bagcontainerThree} alt="" />
                        <button id='luggage-btn' className="btn btn-sm rounded-5">Duffles More <ArrowForwardIosIcon style={{fontSize:"17px"}}/></button>

                    </div>

                </div>
            {/* </div> */}

        </>
    )
}

export default BagContainer