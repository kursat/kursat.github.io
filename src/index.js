import {FocusStyleManager} from '@blueprintjs/core';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import {AppContextProvider} from './contexts/AppContext';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './components/Layout';
import Post from './pages/Post';
import {store} from './redux/store';
import * as serviceWorker from './serviceWorker';

import './styles/app.scss';

FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <AppContextProvider>
                    <Layout>
                        <Route exact path={'/'} component={Home} />
                        <Route exact path={'/blog'} component={Blog} />
                        <Route exact path={'/post/:name'} component={Post} />
                    </Layout>
                </AppContextProvider>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
