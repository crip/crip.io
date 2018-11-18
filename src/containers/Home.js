import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import { Image, Transformation } from 'cloudinary-react'
import celebrate from 'assets/images/celebrate.svg'
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

const grad = 'linear-gradient(to bottom, #f3f7fc 50%, #fff)'

const Section = styled.section`
  background-image: ${props => (props.type === 'gradient' ? grad : '')};
  text-align: ${props => props.textAlign || 'center'};
  padding: 6em 0;
`

const Inner = styled.div`
  max-width: var(--main-width);
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  text-align: ${props => props.textAlign || 'left'};
`

const Double = styled(Section)`
  display: flex;
  flex-wrap: column;
  padding: 0;
  margin: 0;

  div {
    width: 50%;
    margin: 0;
  }
`

const Text = styled.p`
  max-width: ${props => props.maxWidth || '100%'};
  margin: 0 auto;
  line-height: 1.68;
  font-size: 1.4em;
  margin-bottom: 1em;
  color: #444;
`

const Img = styled(Image)`
  margin: 4em 0;
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`

const ProfileImg = styled(Img)`
  border-radius: 100%;
  display: inline-block;
  margin: 0 1em;
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
          <Inner textAlign="center">
            <h2>Why we're here</h2>
            <Text maxWidth="1000px">
              Ok. First of all, welcome. We know you are busy so we'll get straight to the point.
              You have found Crip in Tech.
            </Text>
            <Text maxWidth="1000px">
              Crip in Tech is the culmination of years spent working passionately within tech. Over
              time, this passion blossomed into this consultant company that we hope will touch
              nearly every corner of our lives and others.{' '}
            </Text>
            <Img cloudName="crip" publicId="Company/People/Crips/one-strong-crew.jpg" />
          </Inner>
        </Section>
        <Section type="gradient">
          <Inner>
            <Double textAlign="left">
              <Inner maxWidth="20%">
                <h2>Two hearts, one beat.</h2>
                <Text>
                  We are two professional crips who imagine a world where people wake up every day
                  inspired to go to work and return home at the end of the day feeling fulfilled by
                  the work they do, feeling that they have contributed to something greater than
                  themselves.
                </Text>
                <Text>
                  By harnessing the powers of disrupting culture, technology and incredible people,
                  we hack creative crips and make them shine.
                </Text>
                <Text>Bright like a diamond, that is.</Text>

                <Text>
                  It’ll be our business to do pleasure with you. Or, you know what we mean.
                </Text>
              </Inner>
              <Inner textAlign="center">
                <ProfileImg
                  cloudName="crip"
                  publicId="Company/People/Management/Viktor_Johansson.jpg"
                  alt="Viktor Johansson"
                >
                  <Transformation width="250" crop="scale" />
                </ProfileImg>
                <ProfileImg
                  cloudName="crip"
                  publicId="Company/People/Management/Johnie_Hjelm.jpg"
                  alt="Johnie Hjelm"
                >
                  <Transformation width="250" crop="scale" />
                </ProfileImg>
              </Inner>
            </Double>
          </Inner>
        </Section>
        <Section>
          <Inner>
            <Double>
              <Inner>
                <img src={celebrate} alt="Celebrate" />
              </Inner>
              <Inner style={{ paddingLeft: '2em' }}>
                <h2>Our ethos</h2>
                <h3>Be Different</h3>

                <Text>We approach life & work with an unique perspective.</Text>

                <h3>Be intellectually honest</h3>

                <Text>
                  Everyone, from our mentors to our CEO, is upfront with feedback, direct, honest,
                  and without ego.
                </Text>

                <h3>Be meaningful</h3>

                <Text>We strive to create lasting value in everything we do.</Text>

                <h3>Be passionate</h3>

                <Text>We take a stand for what we believe is right.</Text>
              </Inner>
            </Double>
          </Inner>
        </Section>
      </div>
    )
  }
}

export default withRouteData(Home)
