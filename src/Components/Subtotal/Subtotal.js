import React from 'react'
import * as CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateProvider } from '../../StateProvider/StateProvider'
import { getBasketTotalSelector } from '../../StateProvider/reducer';
import { useHistory } from 'react-router-dom';

export default function Subtotal() {
    const [{ basket }] = useStateProvider();
    const history = useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>
                    <React.Fragment>
                        <p>
                            Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                        This order contains a gift
                    </small>
                    </React.Fragment>
                }
                decimalScale={2}
                value={getBasketTotalSelector(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}
