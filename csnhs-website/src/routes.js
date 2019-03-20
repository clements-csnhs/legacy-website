import React, {Component} from 'react';
import App from './App';
import About from './About';
import Projects from './Projects';
import Points from './points';
import Nomatch from './Nomatch';
import {Navbar, RequestRotate} from './elements.js'
import {Switch, Route, Redirect} from  'react-router-dom';

class Routes extends Component {
    state = { data: null };
    render(){
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
                <Route exact path="/Points" component = {Points}/>
                <Route component = {Nomatch}/>
            </Switch>
            <RequestRotate/>
            
        </div>
    );}

    componentDidMount(){
        this.callBackendAPI()
            .then(res => this.setState( {data: res.express}))
            .catch(err => console.log(err))
        
    }

    callBackendAPI = async () => {
        const response = await fetch('/public');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
          }
      return body;
    }
}

export default Routes