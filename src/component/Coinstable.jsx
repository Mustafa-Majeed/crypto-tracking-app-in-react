import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CoinList } from '../config/Api';
import { CryptoState } from '../CryptoContext';
import Sparkline from './Sparkline';
import { numberWithCommas } from './Carousel'
import { Link } from 'react-router-dom';
function Coinstable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currency, symbol } = CryptoState();

  useEffect(() => {
    setLoading(true);
    axios.get(CoinList(currency))
      .then(res => {
        setCoins(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [currency]);

  return (
    <div className='container text-center coin-cont'>
      <h4 className='text-light display-6 hd-4'>Cryptocurrency Prices by Market Cap</h4>
      <input type="text" placeholder='Search For a Crypto Currency..' className='input-table' />
      <div className='container-lg container-fluid'>
        <table className='table-container table mt-3'>
          <thead className='bg-warning ' style={
            {
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
              height: "8vh",
              color:"rgb(29, 28, 28)"
            }
          } >

            <tr key="tr">
              <th key="coin"  scope="col" style={{ textAlign: "left" }}>
                Coin
              </th>
              <th key="price" scope="col">
                Price
              </th>
              <th key="24h change" scope="col">
                24h Change
              </th>
              <th key="market cap" scope="col">
                Market Cap
              </th>
              {/* <td>
                Sparkline
              </td> */}
            </tr>
          </thead>
          <tbody>
            {
              coins.map((item ,index) => {
                let profit = coins.price_change_percentage_24h >= 0;
                return (
                  <>
                    <tr  key={item.id} style={{fontFamily:"Montserrat",fontWeight:500}} >
                      <td key={item.image}>
                        <Link to={`/Coindetail/${item.id}`} style={{textDecoration:"none", color : "white"}}>
                          <div style={{ display: "flex" }}>
                            <img src={item.image} alt={item.name} width="10%" />
                            &nbsp;
                            &nbsp;
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              <span>{item.name}</span>
                              <span>{item.symbol}</span>
                            </div>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <span>
                              <Sparkline data={item.sparkline_in_7d.price} />
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td key={item.current_price} >{`${symbol} ${numberWithCommas(item.current_price.toFixed(2))}`}</td>
                      <td key={ item.price_change_percentage_24h} style={{ color: item.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{profit && "-"}{`${item.price_change_percentage_24h.toFixed(2)}%`}</td>
                      <td  key={item.market_cap}>{`${symbol} ${numberWithCommas(item.market_cap.toFixed(0))}`}M</td>
                    </tr> 
                  </>

                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Coinstable;
