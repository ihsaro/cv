import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import NavigationBar from './components/nav-bar/NavigationBar';
import Introduction from './components/introduction/Introduction';
import Home from './components/home/Home';
import GoToTopWidget from './components/go-to-top-widget/GoToTopWidget';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavigationBar jsonResource={require('./components/home/json/Home.json')} />, document.getElementById('header'));
ReactDOM.render([<Introduction />, <Home />], document.getElementById('main'));
ReactDOM.render(<GoToTopWidget />, document.getElementById('footer'));

serviceWorker.unregister();