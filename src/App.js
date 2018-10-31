import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
import config from '../config.json';
import bugsnag from 'bugsnag-js';
import createPlugin from 'bugsnag-react';
import Routes from 'react-static-routes';

import './app.css';

const bugsnagClient = bugsnag(config.bugsnag.key);
const ErrorBoundary = bugsnagClient.use(createPlugin(React));

const App = () => (
    <ErrorBoundary>
        <Router>
            <div>
                <nav>
                    <Link exact to="/">
                        Home
                    </Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
                <div className="content">
                    <Routes />
                </div>
            </div>
        </Router>
    </ErrorBoundary>
);

export default hot(module)(App);
