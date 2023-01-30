import React from 'react';

import cartIcon from '../images/cart_icon.png';


export function CartWidget(){
    return (
        <div>
        <img src={cartIcon} alt="logo"/>
        <p>3</p>
        </div>
    )
}