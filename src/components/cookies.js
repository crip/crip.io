import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: var(--main-color);
  color: var(--light-color);
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0px;
  left: 0px;
  box-sizing: border-box;
  padding: 0.5em 1em;
  justify-content: center;

  p {
    padding: 0 16px;
  }

  p a {
    color: var(--light-color);
    text-decoration: underline;
  }

  @media (max-width: 32em) {
    bottom: 36px;
    right: 16px;

    img {
      display: none;
    }
  }
`

const Btn = styled.a`
  background-color: var(--secondary-color);
  color: var(--main-color-dark);
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
`

class Cookies extends React.Component {
  state = {
    noAction: true,
  }

  componentWillMount () {
    if (typeof window !== 'undefined' && window.localStorage.getItem('accept-cookies')) {
      this.setState(() => ({ noAction: false }))
    }
  }

  acceptCookies () {
    this.setState(() => ({ noAction: false }))
    if (typeof window !== 'undefined') {
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'Cookies',
        eventAction: 'accept',
        eventLabel: 'Accepted Cookies',
      })
      window.localStorage.setItem('accept-cookies', true)
    }
  }

  render () {
    const { noAction } = this.state

    if (noAction) {
      return (
        <Wrapper>
          <p>
            Yeah, we use cookies to track your every movement so your experience doesn't suck! :){' '}
            <Link to="/cookies">Read our Cookie Policy</Link>.
          </p>
          <Btn onClick={() => this.acceptCookies()}>Aight!</Btn>
        </Wrapper>
      )
    }

    return null
  }
}

export default Cookies
