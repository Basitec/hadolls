import React from 'react'
import card from './icons/credit-card-regular.svg'
import { Link } from 'react-router-dom'
import History from './History.json'
import './App.css'
import user from './icons/user-plus-solid.svg'

function FutureLogged() {
  return (
    <div className='logged'>
        <div className="accumulated">
            <h5>Accumulated Fund</h5>
            <div>
                <h2>₦5,000,000</h2>
                <button><img src={card} alt='' /> Add Funds</button>
            </div>
        </div>
        <div className="Subsidiaries">
            <div>
                <h3>Adeolu Mubarak</h3>
                <p>You</p>
                <b>₦500,000</b>
            </div>
            <div>
            <h3>Adeolu Khadija</h3>
                <p>Subsidiary 1</p>
                <b>₦500,000</b>
            </div>
            <div>
            <h3>Adeolu Taofeeq</h3>
                <p>Subsidiary 2</p>
                <b>₦500,000</b></div>
            <div>
            <h3>Adeolu Khadija</h3>
                <p>Subsidiary 3</p>
                <b>₦500,000</b>
                </div> 
            <button> <img src={user} alt="" />Add New Subsidiary</button>
        </div>
        <div className="Payment">
            <div>
                <h1>Payment History </h1>
                <Link> See Details</Link>
            </div>
{/* <hr /> */}
                <table>
                    <thead>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {
                            History.map((item)=>(
                                <tr>
                                <td>{item.Date}</td>
                                <td>{item.Description}</td>
                                <td>{item.Amount}</td>
                                <td>{item.Status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default FutureLogged