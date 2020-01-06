import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/nav-bar/NavigationBar';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavigationBar />, document.getElementById('header'));

serviceWorker.unregister();