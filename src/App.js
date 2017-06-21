import React, { Component } from 'react';
import './App.css';
import Workout from './Workout.js';



class App extends Component {
 
  render(){

    return (
         <div className = "App">
            <div className = "App-header">
            </div>
            <Workout increment="3" />
         </div>
      );
  }
}



export default App;
