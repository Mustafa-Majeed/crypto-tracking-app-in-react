import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SingleCoin } from '../config/Api';
import { CryptoState } from '../CryptoContext';
import { numberWithCommas } from '../component/Carousel'
function Coindetail() {
  const [coin, setCoin] = useState({});
  const { currency, symbol } = CryptoState();
  const { id } = useParams();
  console.log(coin)

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => {
        setCoin(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div>
        <div className="coinDetail">
          <div className="coinSide">
            {coin.image && <img src={coin.image.large} alt="" width={"20%"} />}
            <h1 style={{ color: "white" }}>{coin.name}</h1>
          </div>
          <h3 style={{ color: "white" }}>Rank: {coin.market_cap_rank
          }</h3>
          {coin.market_data && 
            <h3 style={{ color: "white" }}>
              Current Price: $ {coin.market_data.current_price.usd} 
            </h3>
          }
          {coin.market_data && <h3 style={{ color: "white" }}>Market cap: $ {coin.market_data.market_cap.usd}</h3>}
        </div>
      </div>
    </>
  );
}

export default Coindetail;
