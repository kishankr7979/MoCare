import React from 'react';
import ReactDOM from 'react-dom';
import './start.css';
import bike from './Images/bike.jpeg';


const Start = () => {
	return (

		<div className="Start">
		<div className="start1">
			<h1>MoCare is a Stealth Startup,<p> that is Simplifying Motorcycle Care!!</p>
			
			</h1>

			</div>
			<div className="image">
			<img src={bike} />

			</div>
		</div>
	);
}
export default Start;