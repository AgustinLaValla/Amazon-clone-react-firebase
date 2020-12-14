import React from 'react'
import './Product.css';
import { useStateProvider } from '../../StateProvider/StateProvider';

export default function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateProvider();
    const addToBasket = () => {
        console.log('dispatched')
        dispatch({
            type: 'ADD_TO_BASKET', payload: {
                id: id,
                title,
                image,
                price,
                rating
            }
        })
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {[...Array(rating)].map((v, i) => <p key={i}>⭐</p>)}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket} style={{cursor: 'pointer'}}>Add to Basket</button>
        </div>
    )
}
