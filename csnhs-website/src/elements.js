import React, { Component } from 'react';
import logo from './csnhslogo.png';
import bg from './bg.png';
import git_link from './github_link.png';
import './App.css';


class Headbar extends Component {
    
    render(){
        return (
            <header className = "App-header">
            </header>
        );
    }
    
}

class Navbar extends Component {
    render(){
        return (
            <div className = "App-navbar">
             <ul class = "App-navbar">
                <li class = "App-navbar"><a href = "https://wwww.google.com">Google</a></li>
                <li class = "App-navbar"><a href = "https://wwww.bing.com">Bing</a></li>
             </ul>
            </div>
        );
    }
}

class HeaderImage extends Component {
    render(){
        return (
            <div className = "top-container" >
                <img src={bg} className="App-bg" alt="background" />
                <div className = "Title-bar">
                    <img src = {logo} className = "Top-logo" alt = "CSNHS"/>
                    <p>Clements Computer Science National Honor Society</p>
                </div>
            </div>
        );
    }
}

class Sidebar extends Component {
    render(){
        return(
            <div className = "App-sidebar">
                <a href = "https://github.com/Clements-CSNHS" target = "_blank"><img src = {git_link} alt = "Github Link"></img></a>
            </div>
        );
    }
}

export {
    Headbar,
    Navbar,
    HeaderImage,
    Sidebar
}