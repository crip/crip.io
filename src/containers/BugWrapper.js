import React, { Fragment } from 'react'
import bugsnag from 'bugsnag-js'
import createPlugin from 'bugsnag-react'
import * as pkg from '../../package.json'

const config = process.env.BUGSNAG_KEY || 'x'

const bugsnagClient = bugsnag({
  apiKey: config,
  appVersion: pkg.version,
})

const ErrorBoundary = bugsnagClient.use(createPlugin(React))

const BugWrapper = ({ children }) => {
  if (config !== 'x') {
    return <ErrorBoundary>{children}</ErrorBoundary>
  }

  return <Fragment>{children}</Fragment>
}

export default BugWrapper
