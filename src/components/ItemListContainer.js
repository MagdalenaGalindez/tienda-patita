import React from 'react';

import { ItemList } from './ItemList';


const ItemListContainer = () => {

  const items = [
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

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;
