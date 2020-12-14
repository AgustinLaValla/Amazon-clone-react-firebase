import React from 'react'
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';

export default function PaymentItems({ user, basket }) {
    const ticketNotVisibleState = {
        transform: "translateX(-100%)",
        opacity: 0.1
    };
    return (
        <React.Fragment>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    <FlipMove enterAnimation={{
                        from: ticketNotVisibleState,
                        to: {}
                    }}
                        leaveAnimation={{
                            from: {},
                            to: ticketNotVisibleState
                        }} >
                        {basket.map(({ id, image, rating, title, price }) =>
                            <CheckoutProduct
                                key={id}
                                {...{ id, image, rating, title, price }}
                            />)
                        }
                    </FlipMove>
                </div>
            </div>
        </React.Fragment>
    )
}
