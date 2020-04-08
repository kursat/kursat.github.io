import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import App from './components/App';
import Blog from './components/Blog';
import * as serviceWorker from './serviceWorker';

import './styles/app.scss';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Route exact path={'/'} component={App} />
            <Route exact path={'/blog'} component={Blog} />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
