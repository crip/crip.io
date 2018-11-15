import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import { Image } from 'cloudinary-react'
import { HeroHeader } from '../components/header'
import Navigation from '../components/navigation'
//

const HeroContent = styled.div`
  position: relative;
  padding-top: 80px;
  margin-bottom: -100px;
  z-index: 5;

  span {
    font-size: 2em;
  }

  h1 {
    letter-spacing: 1px;
    font-size: 4em;
    margin-bottom: 2rem;
    max-width: 800px;
    color: white;
  }

  p {
    max-width: 750px;
    font-size: 1.4em;
    line-height: 1.5;
  }
`

const Section = styled.section`
  text-align: center;
  padding: 8em 1em;

  p {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.4em;
  }
`

const Img = styled(Image)`
  max-width: 100%;
  height: auto;
  display: block;
`

class Home extends React.PureComponent {
  render () {
    return (
      <div>
        <Navigation />
        <HeroHeader>
          <HeroContent>
            <h1>We are set to make a difference in the tech industry</h1>
            <p>
              Technology is changing how people interact. How products and services are imagined,
              created and delivered. It is transforming and reshaping businesses, economies and life
              itself. Allowing us to connect people with businesses in a innovative and
              groundbreaking way.
            </p>
          </HeroContent>
        </HeroHeader>
        <Section>
          <h2>Why we're here</h2>
          <p>We are currently operating in Sweden, but our sights are set to spread globally.</p>
        </Section>
        <Img cloudName="crip" publicId="Company/People/Crips/one-strong-crew.jpg" />
      </div>
    )
  }
}

export default withRouteData(Home)
