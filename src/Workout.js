import React, {Component} from 'react';

class Workout extends Component {
	render(){
		var styleWorkout = {
			backgroundColor: "green",
			width: "100%",
			height: "100px"
		};

		return (
			   <div>
					<h3 style={styleWorkout}>Workout {this.props.date}</h3>
				</div>
			);
	}
}

export default Workout;