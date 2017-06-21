import React, {Component} from 'react';

class Workout extends Component {
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}

	render(){
		var styleWorkout = {
			backgroundColor: "green",
			width: "100%",
			height: "100px"
		};

		return (
			   <div>
					<h3 style={styleWorkout}>Workout {this.state.date.toLocaleTimeString()}</h3>
				</div>
			);
	}
}

export default Workout;