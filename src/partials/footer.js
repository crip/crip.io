import React from 'react'
import { withSiteData, Link } from 'react-static'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import footerbg from 'assets/images/footerbg.svg'
import Logo from '../components/logo'

const Wrapper = styled.footer`
  background-color: var(--main-color-dark);
  color: white;
  padding: 3em 0;
`

const FooterCurve = styled.img`
  display: block;
  margin-bottom: -5px;
  width: 100%;
  height: auto;
`

const Inner = styled(Flex)`
  max-width: var(--main-width);
  margin: 0 auto;

  svg {
    height: auto;
  }

  a {
    color: white;
    text-decoration: none;
    margin-bottom: 8px;
    display: inline-block;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  a::before {
    content: '';
    display: block;
    width: 15px;
    height: 1px;
    border-top: 2px solid var(--secondary-color);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: inherit;
    opacity: 0;
  }

  a:hover,
  a:focus {
    transform: translateX(10px);
    color: var(--secondary-color);
    text-decoration: none;

    &::before {
      opacity: 1;
      transform: translateX(-25px) translateY(-50%);
    }
  }

  @media (max-width: 32em) {
    flex-direction: column;
  }
`

const FooterTitle = styled.h3`
  color: var(--secondary-color);
  font-size: 1em;
  margin-bottom: 1em;
  font-weight: bold;
`

const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
`

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1em;
`

const FooterMenu = ({ menu }) => {
  if (Array.isArray(menu)) {
    return (
      <Menu>
        {menu.map((item, index) => (
          <li key={`menu-item-${index}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </Menu>
    )
  }
}

const Footer = ({ title, menus }) => {
  const currentYear = new Date().getFullYear()
  const { main, follow, legal } = menus
  return (
    <React.Fragment>
      <FooterCurve src={footerbg} role="img" />
      <Wrapper>
        <Inner pb={4}>
          <Box px={3} width={[1, 1 / 5]} pb={[3, 0]}>
            <Logo width="50" />
            <p>
              We create possibilities for the connected world. <strong>Be Bold.</strong>
            </p>
          </Box>
          <Box px={3} width={[1, 1 / 5]} pb={[3, 0]}>
            <FooterTitle>Explore</FooterTitle>
            <FooterMenu menu={main} />
          </Box>
          <Box px={3} width={[1, 1 / 5]} pb={[3, 0]}>
            <FooterTitle>Visit</FooterTitle>
            <p>
              Convendum Coworking Space
              <br />
              Regeringsgatan 48,
              <br />
              111 56 Stockholm
            </p>
            <FooterTitle>New business</FooterTitle>
            <p>
              <a href="mailto:engage@crip.io">engage@crip.io</a>
              <br />
              +4670-458 09 74
            </p>
          </Box>
          <Box px={3} width={[1, 1 / 5]} pb={[3, 0]}>
            <FooterTitle>Follow</FooterTitle>
            <FooterMenu menu={follow} />
          </Box>
          <Box px={3} width={[1, 1 / 5]} pb={[3, 0]}>
            <FooterTitle>Legal</FooterTitle>
            <FooterMenu menu={legal} />
          </Box>
        </Inner>
        <Inner px={3} justifyContent="space-between">
          <Box>
            <Copyright>
              © {currentYear} {title}. All Rights Reserved.
            </Copyright>
          </Box>
        </Inner>
      </Wrapper>
    </React.Fragment>
  )
}

export default withSiteData(Footer)
