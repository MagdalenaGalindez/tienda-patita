import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > <
        /div>
    );
}

export default App;

// Navbar.js

import React from 'react';
const Navbar = () => {
    return ( <
        nav >
        <
        h1 > Mi App < /h1> <
        ul >
        <
        li > Home < /li> <
        li > Nosotros < /li> <
        li > Contacto < /li> <
        li > Gatos < /li> <
        li > Veterinaria < /li> </
        nav >
    );
}
export default Navbar;