import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Nomatch extends Component {
    render(){
        return(
            <div className = "App">
                <div className = "App-body">
                    <div className = "App-textbox">
                        <h1>404</h1>
                        <h3>This page could not be found. Make sure you have typed the address properly</h3>
                        <Link to = "/Home"><h3>Back to Home</h3></Link>
                    </div>
                </div>
            </div>

        );

    }
}

export default Nomatch;