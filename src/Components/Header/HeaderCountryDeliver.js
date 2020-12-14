import React from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

export default function HeaderCountryDeliver() {
    return (
        <div className="header__option">
            <span className="header__optionLineOne">Deliver To</span>
            <span className="header__optionLineTwo">
                <LocationOnOutlinedIcon className="header__locationIcon" />
                Argentina
            </span>
        </div>
    )
}
