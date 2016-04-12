import React from 'react';

const JobRow = React.createClass({
  render: function() {
    return              <div>
        <h5>yesterday</h5>
        <h2>Senior Frontend Engineer</h2>
        <span>NSONE • <p>New York, NY</p></span>
        <h5>Senior Frontend EngineerSolve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...</h5>
        <ul>
          <li>angularjs</li>
          <li>d3.js</li>
          <li>javascript</li>
          <li>ui</li>
          <li>css</li>
        </ul>
        <div className="linebreak"></div>
      </div>
  }
});

export default JobRow;