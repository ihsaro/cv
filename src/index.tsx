import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './json/Home.json';

import NavigationBar from './components/nav-bar/NavigationBar';
import Home from './components/home/Home';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavigationBar jsonResource={require('./json/Home.json')}/>, document.getElementById('header'));

ReactDOM.render(<Home/>, document.getElementById('main'));

serviceWorker.unregister();