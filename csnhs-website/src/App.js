import React, { Component } from 'react';
import logo from './nep.png';
import './App.css';
import {Headbar, Navbar} from './navbar.js'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Headbar/>
        <Navbar/>
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Big Chungus Text</h1>
          <p id ="main_text">
            The Clements CSNHS is the best club in the school!
            <br/ >
            We have an attendence rate of 20% at every meeting.
          </p>
          <input type = "button" value = "Pointless Button"/>
          <Tick/>
        </div>
      </div>
    )
  }
}

class Tick extends Component {

  constructor(props){
    super(props)
    this.state = {date : new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick() {
    this.setState( {date: new Date()})
  }
  render(){
      return <h3> It is now {this.state.date.toLocaleTimeString()}</h3>
  }
}



export default App;
