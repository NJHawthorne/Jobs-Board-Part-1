// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// import a module from another file.
import tiy from './app.js';
import Navigation from './components/Navigation.js';
import FilterBox from './components/FilterBox.js';
import JobRow from './components/JobRow.js';
import InfoBox from './components/InfoBox.js';
import CompanyBox from './components/CompanyBox.js';

// Looks like the imported module was a function, because here we're executing it!
tiy();

ReactDOM.render(<Navigation />, document.querySelector('nav'));
ReactDOM.render(<FilterBox />, document.querySelector('.filterbox'));
ReactDOM.render(<JobRow />, document.querySelector('.jobrow'));
ReactDOM.render(<InfoBox />, document.querySelector('.infobox'));
ReactDOM.render(<CompanyBox />, document.querySelector('.companybox'));