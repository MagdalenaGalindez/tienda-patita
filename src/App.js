import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home } from './components/paginas/Home';
import { AboutUs } from './components/paginas/AboutUs';
import { ArticulosDecorativos } from './components/paginas/ArticulosDecorativos';


function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/about-us" element={< AboutUs />} />
                <Route path="/shop" element={< ArticulosDecorativos />} />
                <Route path="/" element={< Home/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App

