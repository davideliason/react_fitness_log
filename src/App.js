import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Workout from './Workout.js';



class App extends Component {
 
  render(){

    return (
         <div className = "App">
            <div className = "App-header">
            </div>
            <Workout date="Tuesday" />
         </div>
      );
  }
}



export default App;
