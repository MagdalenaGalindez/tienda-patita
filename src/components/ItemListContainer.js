import React, { useEffect, useState } from 'react';

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


const fetchProducts = async () => new Promise(resolve => {
    setTimeout(() => {
        resolve(sampleItems)
    }, 2000)
})


const ItemListContainer = () => {

    const [items, setItems] = useState(null)


    useEffect(async () => {
        const products = await fetchProducts()

        setItems(products)
    }, [])


    if (!items) {
        return (<strong>Loading...</strong>)
    }

    return (
        <ItemList items={items} />
    );
}

export default ItemListContainer;
