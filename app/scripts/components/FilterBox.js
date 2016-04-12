import React from 'react';

const FilterBox = React.createClass({
	render: function() {
		return   	  	<form>
			<span>Keywords</span>
	  		<span>Location</span>
	  		<div className="addingSection">
	  			<input type="text"></input>
	  			<input type="text"></input>
	  			<button>Search</button>
	  		</div>
	  		<div className="linebreak"></div>
  		</form>
	}
});

export default FilterBox;