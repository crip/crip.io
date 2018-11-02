import React, { Fragment } from 'react';
import config from '../../config.json';
import * as pkg from '../../package.json';
import bugsnag from 'bugsnag-js';
import createPlugin from 'bugsnag-react';

const hasApiKey = Object.prototype.hasOwnProperty.apply(config.bugsnag, [
    'key'
]);
const bugsnagClient = bugsnag({
    apiKey: hasApiKey ? config.bugsnag.key : process.env.BUGSNAG_KEY,
    appVersion: pkg.version
});

const ErrorBoundary = bugsnagClient.use(createPlugin(React));

const BugWrapper = ({ children }) => {
    if (hasApiKey) {
        return <ErrorBoundary>{children}</ErrorBoundary>;
    }

    return <Fragment>{children}</Fragment>;
};

export default BugWrapper;
