import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

export default function HeaderSearch() {
    return (
        <div className="header__search">
            <input type="text" className="header__input" />
            <SearchIcon className="header__searchIcon"/>
        </div>
    )
}
