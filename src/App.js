import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import BugWrapper from './containers/BugWrapper';

import './app.css';

const App = () => (
    <BugWrapper>
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
    </BugWrapper>
);

export default hot(module)(App);
