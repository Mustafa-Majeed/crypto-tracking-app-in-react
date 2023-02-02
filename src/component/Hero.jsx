import React from 'react'
import Carousel from './Carousel'

function Hero() {
    return (
        <div className="cont">

            <div className='HeroImg'>

                <div className='Hero-text'>
                    <h2>Crypto-info</h2>
                    <p>Get All The Info Regarding Your Favorite Crypto Currency</p>
                </div>

            </div>
            <div className="carousel">
                <Carousel />
            </div>
        </div>
    )
}

export default Hero
