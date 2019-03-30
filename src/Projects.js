import React, { Component } from 'react';
import logo from './gfx/star.png';
import './App.css';
import { ProjectsImage, Sidebar} from './elements.js'


class Projects extends Component {
  render() {
    return (
      
      <div className="App">
        <ProjectsImage/>
        <Sidebar/>
        <div className="App-body">

           <div className="App-textbox">
           <img src={logo} className="App-logo" alt="logo"/>
            <h2>A list of our past and current projects can be found here.</h2>
            
         </div>

         
        
        <div className="App-projectbox" data-aos = "fade-left">

            <h2>CSNHS Website</h2>
            
            <p>What you are looking at right now!
            This website is intended to give both current and prospective members
            information on club activites and upcoming events.</p>
         </div>

         <div className="App-projectbox" data-aos = "fade-left">

            <h2>SciBowl Round Generator</h2>
            
            <p>A Java program which creates randomized SciBowl contest rounds, presenting
            them as a PDF with page number and asnwers. Questions are selected from a test bank,
            which is organized by the field the question belongs too (biology, chemistry, etc.)</p>
         </div>

         <div className="App-projectbox" data-aos = "fade-left">

            <h2>Coding Club Volunteering</h2>
            
            <p>We assist the coding clubs of nearby middle schools, teaching students
            how to use Scratch as well as basic Java. The goal is to prepare eager coding
            club memebers for high school level computer science classes.

            </p>
         </div>


         <div className="App-projectbox" data-aos = "fade-left">

            <h2>Clements Invitational</h2>

             <p>Every year, Clements hosts a programming conpetition consisting of both a
             written and live coding portions. Contestants are divided into novice and advanced
             teams of up to three people each. 
            </p>
         </div>

         <div className="App-projectbox" data-aos = "fade-left">

            <h2>CHS Tech Support</h2>

             <p>Have an issue with some technology? Is your computer acting up? You can ask the 
             Clements CSNHS for some help! Unfortunately this service is still a work in progress,
             but when it's up and running (which will be soon), you will be able to access it
             from a page on this website.  
            </p>
         </div>

       </div>
      </div>
    )
  }
}


export default Projects;
