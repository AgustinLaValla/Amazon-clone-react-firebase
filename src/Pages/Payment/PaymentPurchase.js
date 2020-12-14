import React from 'react'
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotalSelector } from '../../StateProvider/reducer';
import axios from '../../axios/axios';
import { db } from '../../db';

export default function PaymentPurchase({ basket, dispatch, user }) {
    const history = useHistory();

    const [error, setError] = React.useState(null);
    const [disabled, setDisabled] = React.useState(true);
    const [succeeded, setSucceeded] = React.useState(false);
    const [processing, setProcessing] = React.useState("");
    const [clientSecret, setClientSecret] = React.useState("");

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);

        if (!user) {
            alert("You need to be logged in to make a purchase")
            setError(null);
            setProcessing(false);
            return;
        };


        //paymentIntent = payment confirmation
        const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });

        await db.collection('users').doc(user.uid).collection('orders').doc(paymentIntent.id).set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/orders');
        dispatch({ type: 'CLEAR_BASKET' });
    };

    const handleChange = (ev) => {
        //Listen for changes in the cardElement and display errors as the customer types card details
        setDisabled(ev.empty);
        setError(ev.error ? ev.error.message : '');
    }


    React.useEffect(() => {
        //Generate the special stripe secret wich allows us to charge a customer 
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                //Stripe expects the total in a currencies suunits
                url: `/payments/create?total=${getBasketTotalSelector(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
        return () => { }
    }, [basket])

    console.log('THE SECRET IS >>>>>>', clientSecret)

    return (
        <div className="payment__section">
            <div className="payment__title">
                <h3>Review items and delivery</h3>
            </div>
            <div className="payment__details">
                <form onSubmit={handleSubmit}>
                    <CardElement
                        onChange={handleChange}
                    />
                    <div className="payment__priceContainer">
                        <CurrencyFormat
                            renderText={(value) =>
                                <React.Fragment>
                                    <h3>Order total: {value}</h3>
                                </React.Fragment>
                            }
                            decimalScale={2}
                            value={getBasketTotalSelector(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing
                                ? <p>Processing</p>
                                : 'Buy Now'}
                            </span>
                        </button>
                    </div>

                    {/* Error */}
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    )
}
