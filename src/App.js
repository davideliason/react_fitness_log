import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
 
  render(){

     var white = {
     color: "white"
    };

    return (
         <div className = "App">
            <div className = "App-header">
              <span style={white}>hi</span>
            </div>
         </div>
      );
  }
}



export default App;
