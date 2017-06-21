import React, { Component } from 'react';
import './App.css';
import Workout from './Workout.js';



class App extends Component {
 
  render(){

    return (
         <div className = "App">
            <div className = "App-header">
            </div>
            <Workout />
         </div>
      );
  }
}



export default App;
