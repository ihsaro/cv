import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import NavigationBar from './components/nav-bar/NavigationBar';
import Introduction from './components/introduction/Introduction';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import GoToTopWidget from './components/go-to-top-widget/GoToTopWidget';

import * as serviceWorker from './serviceWorker';
import Education from './components/education/Education';

ReactDOM.render(<NavigationBar jsonResource={require('./components/nav-bar/json/NavigationBar.json')} />, document.getElementById('header'));
ReactDOM.render([<Introduction />, <Home />, <Education />, <Skills />], document.getElementById('main'));
ReactDOM.render(<GoToTopWidget />, document.getElementById('footer'));

serviceWorker.unregister();