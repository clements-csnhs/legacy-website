import React, { Component } from 'react';
import logo from './gfx/star.png';
import './App.css';
import { HeaderImage, Sidebar} from './elements.js'


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <HeaderImage/>
        <Sidebar/>
        <div className="App-body">
        
           <div className="App-textbox" data-aos = "fade-right">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>Waitlisted From UCLA Gang</h1>
            <p id ="main_text">
              The Clements CSNHS is the best club in the school!
              <br/>
              We have an attendence rate of 20% at every meeting.
           </p>
         </div>

         <div className = "App-textbox" data-aos = "fade-left">
           <p id="more_text">
             We do all sorts of amazing projects
             <br/>
             We just forgot about them in a few weeks
           </p>
           <input type = "button" value = "Pointless Button"/>
            <Tick/>
         </div>
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
