import React from 'react';
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import Header from '../../Components/Header/Header';
import Subtotal from '../../Components/Subtotal/Subtotal';
import { useStateProvider } from '../../StateProvider/StateProvider';
import FlipMove from 'react-flip-move';
import './Checkout.css';

export default function Checkout() {
    const [{ basket, user }, dispatch] = useStateProvider();
    const ticketNotVisibleState = {
        transform: "translateX(-100%)",
        opacity: 0.1
    };
    return (
        <React.Fragment>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <img
                        className="checkout__ad"
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492669_.jpg"
                        alt=""
                    />

                    <div className="checkout__title">
                        <h2>
                            {user && `Hello ${user.email}! `}
                        Your shopping Basket
                        </h2>
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

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </React.Fragment>
    )
}
