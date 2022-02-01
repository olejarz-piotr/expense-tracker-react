import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
const  TransactionList = () => {
    const context = useContext(GlobalContext);
    
    return (
        <div>
            <h3>History</h3>
            <ul id='list' className='list'>
        {transactions.map(transaction=>(  <li className='minus'>
        {transaction.text}<span>$400</span>
                    <button className='delete-btn'>X</button>
                </li>  ))}
               
            </ul>
        </div>
    );
};

export default  TransactionList;
