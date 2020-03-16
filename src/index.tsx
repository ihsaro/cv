import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './components/shared/All.css';

import NavigationBar from './components/nav-bar/NavigationBar';
import Introduction from './components/introduction/Introduction';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import GoToTopWidget from './components/go-to-top-widget/GoToTopWidget';

import * as serviceWorker from './serviceWorker';
import Education from './components/education/Education';

ReactDOM.render(<NavigationBar resource={require('./components/nav-bar/json/NavigationBar.json')} />, document.getElementById('header'));
ReactDOM.render([<Introduction />, <Home />, <Education />, <Skills />, <Experience />, <Projects />], document.getElementById('main'));
ReactDOM.render(<GoToTopWidget />, document.getElementById('footer'));

serviceWorker.unregister();