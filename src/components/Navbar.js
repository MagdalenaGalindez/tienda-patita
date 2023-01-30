import React from 'react';
import { CartWidget } from './CartWidget';


const Navbar = () => {
    const categories = ['Home', 'Nosotros', 'Contacto', 'Gato', 'Veterinaria'];

    return (
        <nav>
            <div>
                <h1>My App</h1>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}>
                            <a href={`/${category.toLowerCase()}`}>{category}</a>
                        </li >
                    ))}
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;
