import React, { Component } from 'react';
import logo from './gfx/star.png';
import { SupportImage, Sidebar} from './elements.js';

class Support extends Component{

    render(){
        var smallText = {
            fontSize: "calc(1px + 2vmin)",
            width: "50%",
        }
        return(
            <div className = "app">
                 <SupportImage/>
                 <Sidebar/>
                 <div className="App-body">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h5 className = "App-textbox">
                    Need some help with tech? Fill out this form and a CSNHS member will contact you ASAP
                    </h5>
                    <SupportForm/>
                    <br/>
                    <div className = "App-textbox" style = {smallText}>
                        <p >This tech support service is provided for free and run entirely by CSNHS volunteers. We will try to get back to you and solve your problem quickly, but that is not guarenteed.
                          Follow any advice given at your own risk. This service is intended only for Clements students and faculty.</p>
                    </div>
                 </div>
            </div>
        );
    }

}

class SupportForm extends Component{

    constructor(props){
        super(props);
        this.state = {captcha: '123456'};
        this.state = {message: '...'};
        this.regenerateCaptcha = this.regenerateCaptcha.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendData = this.sendData.bind(this);

    }

    regenerateCaptcha(){
        var num = Math.floor(Math.random() * 99999) + 10000;
        this.setState({captcha : num});
    }

    componentWillMount(){
        this.regenerateCaptcha();
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({message: 'Waiting for server response...'});

        if( parseInt(document.getElementById('captchaInput').value) !== parseInt(this.state.captcha)){
            this.setState({message: 'Captcha is incorrect!'});
            document.getElementById('captchaInput').value = "";
            return;
        }

        document.getElementById('captchaInput').value = "";

        var msg = document.getElementById('nameInput').value;
        this.setState({message: msg + ' Captcha correct!'});
        this.regenerateCaptcha();
        //this.setState({toSend: this.state.input})
        
        this.sendData(document.getElementById('nameInput').value, document.getElementById('emailInput').value, document.getElementById('descInput').value);
        document.getElementById('supportForm').reset();

        //disable submit button for 3 seconds
        document.getElementById('submitButton').disabled = true;
        window.setTimeout(function() { document.getElementById('submitButton').disabled = false;}, 3000);

    }
    
    sendData(nameIn, emailIn, messageIn){

        var date = new Date()

        fetch('/api/support', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify({
                name: nameIn,
                email: emailIn,
                message: messageIn,
                date: date,
            }),
                
        }).then(res => res.json().then((body) => this.setState({message : body.msg.toString()})));
    
    }

    render(){
        return(
            <div className = "App-textbox">
            <form onSubmit = {this.handleSubmit} id = "supportForm">
                <div className= "Row">
                    <div className = "Col-25">
                         <label className = "Input-label">Name: </label>
                    </div>
                
                    <div className = "Col-75">
                        <input className = "Input-field" type="text" maxLength = "50" placeholder = "Name" id = "nameInput" required/>
                    </div>
                </div>

                <div className= "Row">
                    <div className = "Col-25">
                         <label className = "Input-label">Email: </label>
                    </div>
                
                    <div className = "Col-75">
                        <input className = "Input-field" type="email" maxLength = "50" placeholder = "Contact Email"  id = "emailInput"required/>
                    </div>
                </div>
                
                <div className= "Row">
                    <div className = "Col-25">
                      <label className = "Input-label">Describe your issue: </label>
                    </div>
                
                    <div className = "Col-75">
                    <textarea className = "Input-large" type="text" maxLength = "500" placeholder = "Write something..." id = "descInput"required/>
                    </div>
                </div>

                <div className= "Row">
                    <div className = "Col-25">
                         <label className = "Input-label">Please enter: {this.state.captcha} </label>
                    </div>
                
                    <div className = "Col-75">
                        <input className = "Input-field" maxLength = "8" placeholder = "Captcha" id = "captchaInput" required/>
                    </div>
                </div>
      
                <input className = "Regular-button" type = "submit" value = "Submit" id = "submitButton"/>
            </form>

            
            <p> {this.state.message} </p>
            </div>
        );
    }
}

export default Support;