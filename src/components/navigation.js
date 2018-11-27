import React, { Component } from 'react'
import { withSiteData, Link } from 'react-static'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import { LogoFull } from './logo'

const NavigationWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`

const Inner = styled(Flex)`
  max-width: var(--main-width);
  margin: 0 auto;

  @media (max-width: 32em) {
    .hide-on-mobile {
      display: none;
    }
  }
`

const Hamburger = styled.button`
  position: relative;
  display: block;
  width: 25px;
  height: 25px;
  margin: 0;
  padding: 0;
  background: 0 0;
  border: 0;
  outline: 0;
  transition: all 0s;
  cursor: pointer;

  span {
    position: relative;
    display: block;
    width: 100%;
    border-bottom: 2px white solid;
    transition: width 0.3s, -webkit-transform 0.2s;
    transition: transform 0.2s, width 0.3s;
    transform-origin: center center;
  }

  span:last-child {
    width: 14px;
    margin: 6px 0 0 auto;
  }

  &.-active {
    span {
      width: 25px;
      transform: translateY(4px) rotate(45deg);
      transition-delay: 0.1s, 0s;
    }

    span:last-child {
      transform: translateY(-4px) rotate(-45deg);
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    border-radius: 50%;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover,
  &:focus {
    span {
      width: 14px;
    }

    span:last-child {
      width: 100%;
    }

    &.-active {
      span {
        width: 25px;
      }
    }
  }
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
  state = {
    hm: '',
  }
  render () {
    return (
      <NavigationWrap as="header" role="banner">
        <Inner p={3} alignItems="center" justifyContent="space-between">
          <Box>
            <Link exact to="/">
              <LogoFull textClass="hide-on-mobile" />
            </Link>
          </Box>
          <Box>
            <Hamburger
              onClick={() =>
                this.setState(({ hm }) => ({ hm: hm === '' ? '-active' : '' })).bind(this)
              }
              className={this.state.hm}
            >
              <span />
              <span />
            </Hamburger>
          </Box>
        </Inner>
      </NavigationWrap>
    )
  }
}

export default withSiteData(Navigation)
