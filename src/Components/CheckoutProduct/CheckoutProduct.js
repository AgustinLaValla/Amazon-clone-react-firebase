import React from 'react'
import { useStateProvider } from '../../StateProvider/StateProvider'
import './CheckoutProduct.css'

const CheckoutProduct = React.forwardRef(({ id, image, title, price, rating, hideBtn }, ref) => {

    const [{ basket }, dispatch] = useStateProvider();
    const removeFromBasket = (id) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: id });
    }
    return (
        <div className="checkoutProduct" ref={ref}>
            <img className="checkoutProduct__image" src={image} alt="title" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {[...Array(rating)].map((x, i) => <p key={i}>⭐</p>)}
                </div>
                {!hideBtn &&
                    <button onClick={() => removeFromBasket(id)}>Remove from basket</button>
                }
            </div>
        </div>
    )
});

export default CheckoutProduct;