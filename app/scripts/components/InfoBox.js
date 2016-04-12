import React from 'react';

const InfoBox = React.createClass({
  render: function() {
    return      <div>
        <h2>Looking for a job?</h2>
        <div className="linebreak"></div>
        <p>Create a Fresh Jobs profile and <b>let employers come to you.</b></p>
        <ul>
          <li>Employers search our database and contact you</li>
          <li>Import easily from LinkedIn</li>
          <li>Link to Stack Overflow, GitHub, CodePlex and more</li>
        </ul>
        <button>Create a Profile</button>
      </div>
    }
});

export default InfoBox;