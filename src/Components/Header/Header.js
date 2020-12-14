import React from 'react';
import './Header.css';
import HeaderCountryDeliver from './HeaderCountryDeliver';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import { Link } from 'react-router-dom';
import { useStateProvider } from '../../StateProvider/StateProvider';

export default function Header() {
    const [{basket, user}, dispatch] = useStateProvider();
    console.log(basket);
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://press.aboutamazon.com/sites/g/files/knoqqb37121/themes/site/nir_pid2497/styleguide/media/logo.svg"
                    alt="logo" />
            </Link>
            <HeaderCountryDeliver />
            <HeaderSearch />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_the_U.S..svg/320px-Flag_of_the_U.S..svg.png"
                alt="usa flag"
                className="header__flag"
            />
            <HeaderNav basket={basket} user={user} dispatch={dispatch}/>
        </div>
    )
}
