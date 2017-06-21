import React, {Component} from 'react';

class Workout extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	date: new Date(),
        number: 0
     };
	}

	componentDidMount(){
		console.log('Workout mounted');
		this.status = "good";
		console.log(this.status);

		this.timerID = setInterval(() => 
			this.tick(), 1000
		);
		this.setState({
			number: this.state.number + this.props.increment
		});
	}

	componentWillUnmount() {
    clearInterval(this.timerID);
  }

	tick(){
		this.setState({
			date: new Date()
		});
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
					<h4> Number: {this.state.number} </h4>
				</div>
			);
	}
}

export default Workout;