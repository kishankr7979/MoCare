import React from 'react';
import ReactDOM from 'react-dom';

const Subs = () => {
	const style1 = {
		color:"grey"

	}
	const style2 = {
		textAlign:"center",
		marginTop:"3em"
	}
	return (

		<div className="Subs" style={style1}>
			<h3 style={style2}>We're curently in Product Visualisation Stage</h3>
			<center><p style={{fontSize:"20px"}}><a href="https://mailchi.mp/51f9b1f64f50/mocare"><font color="orange">Subscribe</font></a> for Latest updates!</p></center>
		</div>
	);
}
export default Subs;