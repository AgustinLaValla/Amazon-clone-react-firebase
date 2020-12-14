import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../db';


export default function HeaderNav({ basket, user, dispatch }) {
    const history = useHistory();
    const logout = async () => {
        await auth.signOut();
        dispatch({ type: 'SET_USER', payload: null });
        history.push('/login');
    }
    return (
        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span> 
                {user
                    ? <span
                        className="header__optionLineTwo"
                        onClick={logout}
                    >
                        Logout
                        </span>
                    : <Link to="/login" style={{ textDecoration: 'none' }}>
                        <span className="header__optionLineTwo" style={{ color: 'white' }}>Signin</span>
                    </Link>
                }
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">&orders</span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}
