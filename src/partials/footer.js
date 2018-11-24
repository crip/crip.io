import React from 'react'
import { withSiteData, Link } from 'react-static'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Logo from '../components/logo'

const Wrapper = styled.footer`
  background-color: var(--main-color-dark);
  color: white;
  padding: 3em 0;
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
    margin-bottom: 4px;
    display: inline-block;
    border-bottom: 1px solid transparent;
  }

  a:hover,
  a:focus {
    border-bottom: 1px solid var(--secondary-color);
  }
`

const FooterTitle = styled.h3`
  color: var(--secondary-color);
  font-size: 1em;
  margin-bottom: 1em;
`

const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
`

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
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
    <Wrapper>
      <Inner pb={4}>
        <Box px={3} width={[1, 1 / 5]}>
          <Logo width="50" />
          <p>
            We create possibilities for the connected world. <strong>Be Bold.</strong>
          </p>
        </Box>
        <Box px={3} width={[1, 1 / 5]}>
          <FooterTitle>Explore</FooterTitle>
          <FooterMenu menu={main} />
        </Box>
        <Box px={3} width={[1, 1 / 5]}>
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
        <Box px={3} width={[1, 1 / 5]}>
          <FooterTitle>Follow</FooterTitle>
          <FooterMenu menu={follow} />
        </Box>
        <Box px={3} width={[1, 1 / 5]}>
          <FooterTitle>Legal</FooterTitle>
          <FooterMenu menu={legal} />
        </Box>
      </Inner>
      <Inner px={3}>
        <Box>
          <Copyright>
            © {currentYear} {title}. All Rights Reserved.
          </Copyright>
        </Box>
      </Inner>
    </Wrapper>
  )
}

export default withSiteData(Footer)
