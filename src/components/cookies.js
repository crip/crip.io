import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import cookies from 'assets/images/cookies.svg'

const Wrapper = styled.div`
  background-color: var(--main-color);
  color: var(--light-color);
  display: flex;
  position: fixed;
  max-width: 600px;
  bottom: 16px;
  left: 16px;
  border-radius: 4px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  img {
    margin-left: 16px;
  }

  p {
    padding: 0 16px;
  }

  p a {
    color: var(--light-color);
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
  border-radius: 0 4px 4px 0;
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
      window.localStorage.setItem('accept-cookies', true)
    }
  }

  render () {
    const { noAction } = this.state

    if (noAction) {
      return (
        <Wrapper>
          <img src={cookies} alt="Cookies" />
          <p>
            By using this website, you accept the use of some delicious cookies. For more
            information, read our <Link to="/cookies">Cookie Policy</Link>.
          </p>
          <Btn onClick={() => this.acceptCookies()}>Accept</Btn>
        </Wrapper>
      )
    }

    return null
  }
}

export default Cookies
