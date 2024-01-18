import React from 'react'
import carousel_one from '../assets/images/carousel_one.webp'
import carousel_two from '../assets/images/carousel_two.webp'
import carousel_four from '../assets/images/carousel_four.webp'
import carousel_three from '../assets/images/carousel_three.webp'
import carousel_seven from '../assets/images/carousel_seven.webp'


const Carousel = () => {
    return (
        <>
    

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carousel_one} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel_two} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel_three} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel_three} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel_four} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel_seven} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}

export default Carousel