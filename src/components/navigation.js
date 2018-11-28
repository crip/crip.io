import React, { Component } from 'react'
import { withSiteData, Link } from 'react-static'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import posed from 'react-pose'
import { LogoFull } from './logo'

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

  &.active {
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

    &.active {
      span {
        width: 25px;
      }
    }
  }
`

const NavigationWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;

  &.active {
    svg {
      fill: var(--main-color-dark);
    }
    span {
      border-color: var(--main-color-dark);
    }
  }
`

const Inner = styled(Flex)`
  max-width: var(--main-width);
  margin: 0 auto;
  flex-grow: 1;

  @media (max-width: 32em) {
    .hide-on-mobile {
      display: none;
    }
  }
`

const menuProps = {
  active: {
    y: '0%',
    opacity: 1,
    staggerChildren: 100,
    transition: {
      duration: 200,
      ease: 'easeOut',
    },
  },
  inactive: {
    y: '-100%',
    opacity: 0,
    transition: {
      duration: 200,
      ease: 'easeOut',
    },
  },
}

const MenuWrapper = styled(posed.div(menuProps))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--light-color);
  z-index: 10;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`

const MenuInner = styled(Flex)`
  position: relative;
  justify-content: flex-end;
  align-items: center;
  max-width: var(--main-width);
  height: 80vh;
  margin: 0 auto;
`

const MenuLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`

const menuItemProps = {
  active: {
    opacity: 1,
    x: '0px',
    transition: {
      delay: 250,
    },
  },
  inactive: { opacity: 0, x: '16px' },
}

const MenuItems = styled(posed.li(menuItemProps))`
  padding: 8 0:
  display: block;
  position: relative;

  &:hover,
  &:focus {
    .icon {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  a {
    font-size: calc(2rem + 2vw);
    letter-spacing: -1px;
    line-height: calc(3.5rem + 2vw);
    display: inline-block;
    font-weight: 300;
    color: var(--gray);
    text-decoration: none;
    transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus,
    &.active {
      text-decoration: none;
      color: var(--main-color);
    }
  }

  .icon {
    display: inline-block;
    font-size: 1.5rem;
    vertical-align: top;
    color: var(--pink);
    transform: translate(-10px, 10px);
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  @media (max-width: 32em) {
    .icon {
      font-size: 1rem;
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
`

const Menu = ({ menu }) => {
  if (Array.isArray(menu)) {
    return (
      <MenuLinks>
        {menu.map((item, index) => (
          <MenuItems key={`menu-item-${index}`}>
            <Link
              exact={item.path === '/'}
              to={item.path}
              onClick={() => this.setState(({ active }) => ({ active: !active })).bind(this)}
            >
              {item.name}
            </Link>
            {item.external && <i className="icon icon-cap-icon3" title="External" />}
          </MenuItems>
        ))}
      </MenuLinks>
    )
  }
}

const SocialMenuInner = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: var(--main-width);
  box-sizing: border-box;
  padding: 16px;
`

const socialItemProps = {
  active: {
    opacity: 1,
    transition: {
      delay: 300,
    },
  },
  inactive: { opacity: 0 },
}

const SocialMenuItems = styled(posed.li(socialItemProps))`
  display: inline-block;

  a {
    display: inline-block;
    font-size: calc(1rem + 2vw);
    margin-right: 16px;
    color: var(--gray);
    text-decoration: none;
    transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus,
    &.active {
      text-decoration: none;
      color: var(--main-color);
    }
  }

  span {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
`

const SocialMenu = ({ menu }) => {
  if (Array.isArray(menu)) {
    return (
      <SocialMenuInner>
        {menu.map((item, index) => (
          <SocialMenuItems key={`menu-item-${index}`}>
            <Link to={item.path}>
              <i className={`icon icon-${item.name.toLowerCase()}`} />
              <span>{item.name}</span>
            </Link>
          </SocialMenuItems>
        ))}
      </SocialMenuInner>
    )
  }
}
class Navigation extends Component {
  state = {
    isActive: false,
  }
  constructor () {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState(({ isActive }) => ({ isActive: !isActive }))
  }
  render () {
    const { menus } = this.props
    const { isActive } = this.state
    const activeClass = isActive ? 'active' : ''
    return (
      <React.Fragment>
        <MenuWrapper pose={isActive ? 'active' : 'inactive'}>
          <MenuInner p={3}>
            <Menu menu={menus.main} />
            <SocialMenu menu={menus.follow} />
          </MenuInner>
        </MenuWrapper>
        <NavigationWrap as="header" role="banner" className={activeClass}>
          <Inner p={3} alignItems="center" justifyContent="space-between">
            <Box>
              <Link exact to="/">
                <LogoFull textClass="hide-on-mobile" />
              </Link>
            </Box>
            <Box>
              <Hamburger onClick={this.toggleMenu} className={activeClass}>
                <span />
                <span />
              </Hamburger>
            </Box>
          </Inner>
        </NavigationWrap>
      </React.Fragment>
    )
  }
}

export default withSiteData(Navigation)
