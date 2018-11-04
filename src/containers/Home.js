import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import { LogoWrapper } from '../components/logo'
//

export default withRouteData(({ jdown, reactStatic }) => (
  <div>
    <LogoWrapper width="15em" />
    <section>{convert(reactStatic.contents)}</section>
    <section>{convert(jdown.contents)}</section>
  </div>
))
