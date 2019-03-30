import React, { Component } from 'react';
import logo from './gfx/star.png';
import { PointsImage, Sidebar} from './elements.js'

class Points extends Component{

    constructor(props){
        super(props);
        this.getPoints = this.getPoints.bind(this);
        this.state = {fetched : "" };

        
    }

    render(){
        return(
            <div className = "app">
                 <PointsImage/>
                 <Sidebar/>
                 <div className="App-body">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h5 className = "App-textbox">
                    If you want to check how many points you have, simply enter your ID number and click the button.
                    </h5>
                    <p className = "App-textbox">
                     We have not started tracking points yet, so try the sample IDs 100000, 123456, and 654321.
                    </p>
                    <PointForm/>
                    <h4>{this.state.fetched}</h4>
                 </div>
            </div>
        );
    }

    getPoints(){
        
    }

    componentDidMount(){
        /*this.callBackendAPI()
            .then(res => this.setState( {fetched: res.express}))
            .catch(err => console.log(err))*/
        
    }

    callBackendAPI = async () => {
        const response = await fetch('/api/points');
        const body = await response.json();

        console.log(response.express)

        if (response.status !== 200) {
            throw Error(body.message) 
          }
      return body;
    }
}

class PointForm extends Component {

    constructor(props){
        super(props);
        this.state = {input: '000000'};
        this.state = {value: ''};
        this.state = {toSend: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
    }

    handleChange(event){
        this.setState({input : event.target.value})
    }

    handleSubmit(event){
        this.setState({value: 'Waiting for server response....'});
        //this.setState({toSend: this.state.input})
        event.preventDefault();
        this.send();
    }

    render(){

        var centerText = {
            textAlign: 'center',
            width: '100%',
        }

        var centerButton = {
            align: 'center',
            display: 'block',
        }

        return(
            <>
            
            <form onSubmit = {this.handleSubmit} >
                <input className = "Input-field" type="text" maxLength = "6"  onChange = {this.handleChange} style = {centerText} placeholder = "ID Num" required/>
                <input className = "Regular-button" type = "submit" value = "Submit" style = {centerButton} />
            </form>
            
            <p>{this.state.value}</p>
            </>
        );
    }

    send(){
      
        fetch('/api/points', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify({message: this.state.input }),
            
        }).then(res => res.json().then((body) => this.setState({value : body.msg.toString()})));
        
     /*  this.getData()
        .then(res => this.setState({value : res.message}))
        .catch(err => console.log(err));

        console.log(this.state.value); */
    }

    getData = async() => {
        const response = await fetch('/api/points');
        const body = await response.json();

       // console.log(body);

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        
      return body;
    }

}


export default Points;