import React from 'react'
import { Router, Head, withSiteData } from 'react-static'
import { hot } from 'react-hot-loader'

import Routes from 'react-static-routes'
import Navigation from './components/navigation'
import Footer from './partials/footer'
import Cookies from './components/cookies'

import './app.css'

const App = withSiteData(({ title, slogan }) => (
  <Router>
    <React.Fragment>
      <Head titleTemplate={`${title} - %s`} defaultTitle={`${title} - ${slogan}`} />
      <Navigation />
      <div className="content">
        <Routes />
      </div>
      <Footer />
      <Cookies />
    </React.Fragment>
  </Router>
))

export default hot(module)(App)
