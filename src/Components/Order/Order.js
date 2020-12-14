import React from 'react'
import dayjs from 'dayjs';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import './Order.css';

export default function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{dayjs.unix(order.created).format('Do-MMMM-YYYY, h:mma')}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.basket?.map(({ id, image, rating, title, price }) => (
                <CheckoutProduct
                    key={id}
                    hideBtn={true}
                    {...{ id, image, rating, title, price }}
                />
            ))}
            <CurrencyFormat
                decimalScale={2}
                value={order.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                renderText={(value) => <h3 className="order__total">Order Total: {value}</h3>}
            />
        </div>
    )
}
