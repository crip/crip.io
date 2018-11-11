import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import { LogoFull } from '../components/logo'
import { HeroHeader } from '../components/header'
//

const HeroContent = styled.div`
  padding-top 80px;

  span {
    font-size: 2em;
  }

  h1 {
    letter-spacing: 1px;
    font-size: 3.5em;
    margin-bottom: 2rem;
  }

  p {
    max-width: 750px;
    font-size: 1.4em;
    line-height: 1.5;
  }
`

class Home extends React.PureComponent {
  render () {
    return (
      <div>
        <HeroHeader>
          <LogoFull fill="white" />

          <HeroContent>
            <span role="img" aria-label="Strong crip">
              💪
            </span>
            <h1>We unlock your potential</h1>
            <p>
              Technology is changing how people interact. How products and services are imagined,
              created and delivered. It is transforming and reshaping businesses, economies and life
              itself. Allowing us to connect people with businesses in a innovative and
              groundbreaking way.
            </p>
          </HeroContent>
        </HeroHeader>
      </div>
    )
  }
}

export default withRouteData(Home)
