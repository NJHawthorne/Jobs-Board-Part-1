import React from 'react';

const Navigation = React.createClass({
	render: function() {
		return   	<nav>
  		<div className="logoLayout">
	  		<img className="logo" src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/logo.png?raw=true" />
	  		<h2>Fresh Jobs</h2>
	  	</div>
		<ul>
			<li>JOBS</li>
			<li>COMPANIES</li>
			<li>CITIES</li>
			<li>WHY FRESH?</li>
			<li>FOR EMPLOYERS</li>
		</ul>
  	</nav>;
	}
});

export default Navigation;