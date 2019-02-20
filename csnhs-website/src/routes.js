import React from 'react';
import App from './App';
import About from './About';
import Projects from './Projects';
import Nomatch from './Nomatch';
import {Navbar, RequestRotate} from './elements.js'
import {Switch, Route, Redirect} from  'react-router-dom';

const Routes = () => {
    return(
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/Home" component = {App}/>
                <Route exact path="/">
                    <Redirect to = "/Home"/>
                </Route>
                <Route exact path="/About" component = {About}/>
                <Route exact path="/Projects" component = {Projects}/>
                <Route component = {Nomatch}/>
            </Switch>
            <RequestRotate/>
            
        </div>
    );
}

export default Routes