import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/nav-bar/NavigationBar';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavigationBar 
    lstHref={['#home', '#skills', '#education', '#projects', '#contact']}
    lstFontAwesomeIcons={['fa fa-home', 'fa fa-tools', 'fa fa-university', 'fa fa-laptop', 'fa fa-phone']}
    lstLabels={['Home', 'Skills', 'Education', 'Projects', 'Contact']} />, document.getElementById('header'));

serviceWorker.unregister();