import React from 'react';

const CompanyBox = React.createClass({
	render: function() {
		return   	      <div>
        <h2>Company Information</h2>
        <div className="linebreak"></div>
        <div className="images">
          <img src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/featured-logo.jpg?raw=true" />
          <h1>MaxPlay</h1>
          <h3>Austin, TX</h3>
        </div>
      </div> 
	}
});

export default CompanyBox;