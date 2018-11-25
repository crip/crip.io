import React, { Component } from 'react'
import { withSiteData, Link } from 'react-static'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import { LogoFull } from './logo'

const NavigationWrap = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.04em;
//   margin-left: 16px;
// `

class Navigation extends Component {
  render () {
    return (
      <NavigationWrap role="banner" p={3} alignItems="center" justifyContent="space-between">
        <Box>
          <Link exact to="/">
            <LogoFull />
          </Link>
        </Box>
        {/* <Box>
          <nav role="navigation">
            <NavLink>Home</NavLink>
            <NavLink to="/privacy">Privacy policy</NavLink>
          </nav>
        </Box> */}
      </NavigationWrap>
    )
  }
}

export default withSiteData(Navigation)
