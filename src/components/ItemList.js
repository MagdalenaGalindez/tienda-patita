import React from "react";

import { Item } from "./Item";


export const ItemList = ({ items }) => (
    <div>
        {items.map(item => (
            <Item
                key={item.id}
                title={item.title}
                price={item.price}
                brand={item.brand}
            />
        ))}
    </div>
);
