import React, { useState } from 'react';

import { ItemList } from './ItemList';


const sampleItems = [
    {
        'id': 26,
        'title': 'Plant Hanger For Home',
        'price': 41,
        'brand': 'Boho Decor'
    },
    {
        'id': 27,
        'title': 'Flying Wooden Bird',
        'price': 51,
        'brand': 'Flying Wooden'
    }
]


const ItemListContainer = () => {

    const [items, setItems] = useState(null)

    setTimeout(() => {
        setItems(sampleItems)
    }, 2000);


    if (!items) {
        return (<strong>Loading...</strong>)
    }

    return (
        <ItemList items={items} />
    );
}

export default ItemListContainer;
