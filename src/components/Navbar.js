import React from 'react';
import { Link } from 'react-router-dom';

import { CartWidget } from './CartWidget';


const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>My App</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Artículos</Link>
                        </li>
                        <li>
                            <Link to="/about-us">AboutUs</Link>
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Navbar;