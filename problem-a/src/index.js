import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'; // #2
import Senators from  'senators.json'; // #7

//render the App component here!

// #2
ReactDOM.render(new App(Senators), document.getElementById('root'));



