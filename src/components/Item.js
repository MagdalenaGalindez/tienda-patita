import React from 'react';

import ItemCount from './ItemCount';


export const Item = ({ title, price, brand }) => (
    <div>
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <p>Brand: {brand}</p>
        <ItemCount />
    </div>
)
