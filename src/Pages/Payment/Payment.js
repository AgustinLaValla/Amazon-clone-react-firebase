import React from 'react'
import Header from '../../Components/Header/Header'
import { useStateProvider } from '../../StateProvider/StateProvider';
import './Payment.css';
import PaymentItems from './PaymentItems';
import PaymentPurchase from './PaymentPurchase';

export default function Payment() {

    const [{ basket, user }, dispatch] = useStateProvider();
    
    return (
        <React.Fragment>
            <Header />
            <div className="payment">
                <div className="payment__container">
                    <PaymentItems user={user} basket={basket}/>
                    <PaymentPurchase dispatch={dispatch} basket={basket} user={user}/>
                </div>
            </div>
        </React.Fragment>
    )
}
