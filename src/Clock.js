import React from 'react';

let time = new Date().toLocaleString();

class Clock extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			time: new Date().toLocaleString()
		};
		this.updateClock = this.updateClock.bind(this);
	}
	componentDidMount() {
		this.intervalID = setInterval(
			this.updateClock,
			1000
		);
	}
	componentWillMount() {
		clearInterval(this.intervalID);
	}
	updateClock() {
		this.setState ({
			time: new Date().toLocaleString()
		});
	}
	render() {
		return (
			<p className="App-clock">
			The time is {this.state.time};
		  </p> 
		);
	}
	
}
export default Clock;