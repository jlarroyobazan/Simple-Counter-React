//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import PropTypes from "prop-types";

function SimpleCounter(props) {
	return (
		<div className="wrapper">
			<div className="container-flex">
				<div className="row display-3 justify-content-center font-weight-normal bg-black rounded">
					<div className="icon font-text m-3 p-2">
						<i className="far fa-clock" />
					</div>
					<div className="six font-text bg-gray m-1 p-3 rounded">
						{props.digitSix % 10}
					</div>
					<div className="five font-text bg-gray m-1 p-3 rounded">
						{props.digitFive % 10}
					</div>
					<div className="four font-text bg-gray m-1 p-3 rounded">
						{props.digitFour % 10}
					</div>
					<div className="three font-text bg-gray m-1 p-3 rounded">
						{props.digitThree % 10}
					</div>
					<div className="two font-text bg-gray m-1 p-3 rounded">
						{props.digitTwo % 10}
					</div>
					<div className="one font-text bg-gray m-1 p-3 rounded">
						{props.digitOne % 10}
					</div>
				</div>
			</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter);
	console.log(six, five, four, three, two, one);

	//render your react application
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
