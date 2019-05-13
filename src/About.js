import React, { Component } from 'react';
import logo from './gfx/star.png';
import './App.css';
import { AboutImage, Sidebar} from './elements.js'


class About extends Component {
  render() {
    return (
      
      <div className="App">
        <AboutImage/>
        <Sidebar/>
        <div className="App-body">

           <div className="App-textbox">
           <img src={logo} className="App-logo" alt="logo"/>
            <h1>Who We Are</h1>
            <p id ="main_text">
              CSNHS is an organization that strives to promote the
              <br/>
              learning and understanding of Computer Science both in and outside of school.
           </p>
         </div>

         
        
        <div className="App-textbox">
            <h1>What We Do</h1>
            <p id ="main_text">
              In order to furfill our goal, our members particpate in many
              <br/>
              activities such as hosting events, running contests, and tutoring students.
              <br/>
              In addition, the CSNHS helps around the community by volunteering.
           </p>
         </div>

         <div className="App-textbox">
            <h1>How to Join</h1>
            <p id ="main_text">
              In order to join you need to have taken enhough Comp Sci. classes
              <br/>
              to be currently in CS3 or CS4, or have completed CS3. You also need 
              <br/>
              to have a average of at least 85 across all of your classes.
           </p>
         </div>

         <div className="App-textbox">
            
            <h1>About This Site</h1>
            <p id ="main_text">
              This website was created using React, Node.JS, and SQLite3.
              <br/>
              Website design and programming by Erica Li
              <br/>
              Networking and deployment by Stephan Xie
           </p>
         </div>

       </div>
      </div>
    )
  }
}


export default About;
