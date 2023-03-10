import React from 'react'
import axios from 'axios';
import {CryptoState} from ".././CryptoContext";
import {TrendingCoins} from '.././config/Api'
import { useState } from 'react';
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

export function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}


function Carousel() {
    const [trending,setTrending]=useState([]);
    const { currency ,symbol } = CryptoState();

    useEffect(() => {
      axios.get(TrendingCoins(currency))
        .then(res => {
          setTrending(res.data);
        })
        .catch(err => {
          console.log(err);
          
        });
    }, [currency]);
   
      

    const items = trending.map((coin)=>{
      let profit = coin.price_change_percentage_24h >= 0;
      return(    
        <Link
        className='carouselItems'
        to={`/Coindetail/${coin.id}`}>
            <img src={coin?.image} alt={coin.name}
            height="80"
            style={{marginBottom:10}}/>
            <span>{coin?.symbol}
            &nbsp;
            <span
            style={{
              color: profit > 0 ?"rgb(14,203,129)":"red",
            }}
            >
              {profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
            </span>
            <span style={{fontSize:22, fontWeight:500}}>
              {symbol}{numberWithCommas(coin?.current_price.toFixed(2))}M
            </span>
        </Link>
      )
    });

    const responsive ={
      0:{
        items:2,
      },
      512:{
        items:4,
      },
    }

  return (
    <>
     <AliceCarousel 
     mouseTracking
     infinite
     autoPlayInterval={1000}
     animationDuration={1500}
     disableDotsControls
     responsive={responsive}
     autoPlay
     items={items}
     disableButtonsControls
     className="aliceCarousel"/>
    </>
  )
}

export default Carousel
