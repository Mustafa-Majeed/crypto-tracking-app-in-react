import React from 'react'
import { CryptoState } from "../CryptoContext"
import { Link } from 'react-router-dom';
function Header() {

    const { currency, setCurrency } = CryptoState();
    console.log(currency);
    return (
        <div className='header'>
            <div className="container d-flex             justify-content-between mt-4">
            <h5 ><Link to="/" className='logo'> Crypto-Info</Link></h5>
                <select class="form-select HdSelect bg-warning text-dark" aria-label="Default select example"
                    style={{
                        fontWeight: 500,
                    }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}>
                    <option value="USD" className='bg-warning text-dark' style={{
                        fontWeight: 500,
                    }}>USD</option>
                    <option value="PKR" className='bg-warning text-dark' style={{
                        fontWeight: 500,
                    }}>PKR</option>
                </select>
                <button type="button" class="btn btn-warning" style={{
                    fontWeight: 600,
                }}>Login</button>
            </div>
        </div>
    )
}

export default Header
