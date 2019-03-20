import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './gfx/csnhslogo.png';
import bg from './gfx/bg.png';
import aboutbg from './gfx/code.png';
import projectsbg from './gfx/blend.png';
import flatbg from './gfx/flatbg.png';
import git_link from './gfx/github_link.png';
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
                <li class = "App-navbar"><Link to = "/Home">Home</Link></li>
                <li class = "App-navbar"><Link to = "/About">About</Link></li>
                <li class = "App-navbar"><Link to = "/Projects">Projects</Link></li>
                <li class = "App-navbar"><Link to = "/Points">Points</Link></li>
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
                <div className = "Title-bar-home">
                    <img src = {logo} className = "Top-logo" alt = "CSNHS"/>
                    <h5>Clements Computer Science National Honor Society</h5>
                </div>
            </div>
        );
    }
}

class AboutImage extends Component {
    render(){
        return (
            <div className = "top-container" >
                <img src={aboutbg} className="App-bg" alt="background" />
                <div className = "Title-bar">
                    <h5>About Us</h5>
                </div>
            </div>
        );
    }
}

class ProjectsImage extends Component {
    render(){
        return (
            <div className = "top-container" >
                <img src={projectsbg} className="App-bg" alt="background"/>
                <div className = "Title-bar">
                    <h5>Projects</h5>
                </div>
            </div>
        );
    }
}

class PointsImage extends Component {
    render(){
        return (
            <div className = "top-container" >
            <img src={flatbg} className="App-bg" alt="background"/>
                <div className = "Title-bar">
                    <h5>Points</h5>
                </div>
            </div>
        );
    }
}

class Sidebar extends Component {
    render(){
        return(
            <div className = "App-sidebar">
                <a href = "https://github.com/Clements-CSNHS" target = "_blank" rel="noopener noreferrer"><img src = {git_link} alt = "Github Link"></img></a>
            </div>
        );
    }
}

class RequestRotate extends Component {
    constructor(props){
        super(props);
        this.dismiss = this.dismiss.bind(this);
        this.state = {hide : false};
    }

    dismiss(){
        sessionStorage.setItem("rotate_dismissed", "true");
        //window.alert("Testing");

        
        this.checkIfDismissed();
        
    }

    checkIfDismissed(){
        if(sessionStorage.hasOwnProperty("rotate_dismissed")){
            if(sessionStorage.getItem("rotate_dismissed") === "true"){
                this.setState({hide : true});
            }
            else {
                this.setState({hide : false});
            }
        }

    }
    
    componentWillMount(){
        this.checkIfDismissed();
    }
    render(){
        if(this.state.hide === true)
            return(null)
        else {
        return(
            <div className = "Request-rotate-device">
                <h5>This website looks best in landscape mode</h5>
                <button className = "Text-button" onClick={this.dismiss}>Don't Show Again</button> 
            </div>
        );
        }
    }
}


export {
    Headbar,
    Navbar,
    HeaderImage,
    AboutImage,
    ProjectsImage,
    PointsImage,
    Sidebar,
    RequestRotate
}