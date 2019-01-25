import React, { Component } from 'react';
import logo from './csnhslogo.png';
import './App.css';

class Headbar extends Component {
    
    render(){
        return (
            <header className = "App-header">
            <img src = {logo} alt = "CSNHS"/>
             
            </header>
        );
    }
    
}

class Navbar extends Component {
    render(){
        return (
            <div className = "App-navbar">
             <h4>NotLink &nbsp;&nbsp;&nbsp;NotLink2</h4>
             
            </div>
        );
    }
}

export {
    Headbar,
    Navbar
}