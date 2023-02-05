import React from 'react';
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';

function App() {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="hola Magda"/>
                <ItemCount /> 
        </div>
    );
}

export default App
