import React from 'react';
import ReactDOM from 'react-dom';
import stylesheet from'./stylesheet.css';
class Reactastate extends React.Component{
  constructor(){
    super();
    this.state={intialvalue:"Welcome to my New Application"} 
  }
  changevalue=()=>
  {
    this.setState({intialvalue:"Thank You"});
  }
  render(){
    return<div>
      <h1> {this.state.intialvalue}</h1>
      <button type="button" onClick={this.changevalue}> Submit </button>
    </div>
  }
}

ReactDOM.render(< Reactastate/>,document.getElementById('root'));