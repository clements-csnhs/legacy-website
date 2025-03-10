import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from  'react-router-dom';
import Routes from './routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
//import App from './App';

AOS.init();
ReactDOM.render(
    <Router>
        <Routes/>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
