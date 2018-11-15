import React, { Component } from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'
import { LogoFull } from './logo'

const NavigationWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`

const Inner = styled.div`
  padding: 1.5em 2em;
`

class Navigation extends Component {
  render () {
    return (
      <NavigationWrap role="banner">
        <Inner>
          <LogoFull />
        </Inner>
      </NavigationWrap>
    )
  }
}

export default withSiteData(Navigation)
