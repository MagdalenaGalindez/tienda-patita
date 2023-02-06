import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'


function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App

