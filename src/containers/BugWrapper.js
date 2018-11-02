import React, { Fragment } from 'react'
import bugsnag from 'bugsnag-js'
import createPlugin from 'bugsnag-react'
import * as pkg from '../../package.json'

const config = require('../../config.json')

const hasApiKey = Object.prototype.hasOwnProperty.apply(config.bugsnag, ['key'])

const bugsnagClient = bugsnag({
  apiKey: hasApiKey ? config.bugsnag.key : process.env.BUGSNAG_KEY,
  appVersion: pkg.version,
})

const ErrorBoundary = bugsnagClient.use(createPlugin(React))

const BugWrapper = ({ children }) => {
  if (hasApiKey) {
    return <ErrorBoundary>{children}</ErrorBoundary>
  }

  return <Fragment>{children}</Fragment>
}

export default BugWrapper
