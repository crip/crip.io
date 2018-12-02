import React from 'react'
import { withRouteData, scrollTo } from 'react-static'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import convert from 'htmr'
import { Image, Transformation } from 'cloudinary-react'
import celebrate from 'assets/images/celebrate.svg'
import cripcommunity from 'assets/images/cripcommunity.svg'
import { HeroHeader } from '../components/header'
//

const HeroContent = styled(Box)`
  position: relative;
  z-index: 5;

  h1 {
    letter-spacing: 1px;
    font-size: 3.5em;
    margin-bottom: 2rem;
    color: white;
  }

  p {
    font-size: 1.2em;
    line-height: 1.56;
    margin-bottom: 2em;
  }

  @media (max-width: 32em) {
    h1 {
      font-size: 2em;
    }

    p {
      font-size: 1.1em;
    }
  }
`

const HeroImage = styled(Flex)`
  @media (max-width: 32em) {
    display: none;
  }

  img {
    width: 100%;
    max-width: 350px;
    height: auto;
  }
`

const grad = 'linear-gradient(to bottom, #f3f7fc 50%, #fff)'

const Section = styled.section`
  background-image: ${props => (props.type === 'gradient' ? grad : '')};
  text-align: ${props => props.textAlign || 'center'};
  padding: 6em 0;

  @media (max-width: 32em) {
    padding: 2em 0;
  }
`

const Container = styled(Flex)`
  max-width: var(--main-width);
  margin: 0 auto;
  text-align: ${props => props.textAlign || 'left'};

  @media (max-width: 32em) {
    flex-direction: column;
  }
`

const Text = styled.p`
  max-width: ${props => props.maxWidth || '100%'};
  margin: 0 auto;
  line-height: 1.68;
  font-size: 1.2em;
  margin-bottom: 1em;
  color: #444;

  @media (max-width: 32em) {
    font-size: 1em;
  }
`

const Img = styled(Image)`
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`

const Poly = styled.div`
  clip-path: polygon(-15% 100%, 100% 85%, 100% 0, 0 15%);
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  &:last-of-type {
    margin-top: -36%;
    left: 34%;
    position: relative;
    overflow: hidden;
    width: auto;
  }

  @media (max-width: 32em) {
    width: 90%;
    &:last-of-type {
      width: 90%;
      margin-top: -50%;
      left: 10%;
    }
  }
`

const ProfileImg = styled(Image)``

const Engage = styled(Box)`
  background-color: var(
    ${props => (props.theme === 'light' ? '--secondary-color' : '--main-color')}
  );
  color: var(${props => (props.theme === 'light' ? '--main-color-dark' : '--light-color')});
  clip-path: polygon(0 100%, 100% 90%, 100% 0, 0 10%);
  position: relative;

  h2 {
    color: inherit;
    margin: 0;
    font-size: 3em;
    font-weight: bold;
  }

  .subtitle {
    color: var(${props => (props.theme === 'light' ? '--main-color' : '--secondary-color')});
    margin: 0;
    font-size: 1.7em;
    font-weight: 400;
    margin-bottom: 1.5em;
  }

  ${Text} {
    color: var(${props => (props.theme === 'light' ? '--main-color-dark' : '--light-color')});
  }

  @media (max-width: 32em) {
    clip-path: polygon(0 100%, 100% 95%, 100% 0, 0 5%);

    h2 {
      font-size: 2em;
    }

    .subtitle {
      font-size: 1.2em;
    }
  }
`

const Btn = styled.a`
  display: inline-block;
  background-color: var(
    ${props => (props.theme === 'light' ? '--main-color' : '--secondary-color')}
  );
  color: var(${props => (props.theme === 'light' ? '--light-color' : '--main-color-dark')});
  line-height: 2.5;
  padding: 0 1.2em;
  border-radius: 4em;
  font-size: 1.2em;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  .icon {
    margin-left: 0.5em;
    font-size: 0.9em;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: var(${props => (props.theme === 'light' ? '--light-color' : '--main-color-dark')});

    .icon-plus {
      transform: rotate(90deg);
    }

    .icon-arrow-right {
      margin-left: 1em;
    }
  }

  @media (max-width: 32em) {
    font-size: 1em;
  }
`

class Home extends React.Component {
  async goToContent () {
    if (typeof document !== 'undefined') {
      const content = document.querySelector('#content')
      await scrollTo(content, {
        duration: 500,
      })
    }
  }

  render () {
    const { header } = this.props
    return (
      <div>
        <HeroHeader>
          <Flex>
            <HeroContent width={[1, 1, 2 / 3, 1 / 2]} p={3}>
              {convert(header.contents)}
              <Btn onClick={async () => this.goToContent()}>
                Join the ride <i className="icon icon-plus" />
              </Btn>
            </HeroContent>
            <HeroImage width={[1, 1, 2 / 3, 1 / 2]} p={3} justifyContent="center">
              <img src={cripcommunity} alt="" />
            </HeroImage>
          </Flex>
        </HeroHeader>
        <Section id="content">
          <Flex>
            <Box width={[1, 1 / 2]} ml={[0, '25%']} px={[3, 0]}>
              <h2>Why we are here</h2>
              <Text>
                Ok. First of all, welcome. We know you are busy so we'll get straight to the point.
                You have discovered Crip in Tech.
              </Text>
              <Text>
                Crip in Tech is the culmination of years spent working passionately within tech.
                Over time, this passion blossomed into this consultant agency that we hope will
                touch nearly every corner of our lives and others.
              </Text>
            </Box>
          </Flex>
          <Box width={1} my={[0, 2]} px={3}>
            <Img
              cloudName="crip"
              publicId="Company/People/Crips/one-strong-crew.jpg"
              secure="true"
            />
          </Box>
        </Section>
        <Section type="gradient">
          <Container>
            <Box width={[1, 1 / 2]} p={3}>
              <h2>Two hearts, one beat</h2>
              <Text>
                We are two professional crips who imagine a world where people wake up every day
                inspired to go to work. Return home at the end of the day feeling fulfilled by the
                work they do, feeling that they have contributed to something greater than
                themselves.
              </Text>
              <Text>
                By harnessing the powers of disrupting culture, technology and incredible people; we
                hack creative crips and make them shine.
              </Text>
              <Text>Bright like a diamond, that is.</Text>

              <Text>It’ll be our business to do pleasure with you. Or, you know what we mean.</Text>
            </Box>
            <Box width={[1, 1 / 2]} p={3} style={{ overflow: 'hidden' }}>
              <Poly>
                <ProfileImg
                  cloudName="crip"
                  publicId="Company/People/Management/viktor.jpg"
                  secure="true"
                  alt="Viktor Johansson"
                >
                  <Transformation width="400" crop="scale" />
                </ProfileImg>
              </Poly>
              <Poly>
                <ProfileImg
                  cloudName="crip"
                  publicId="Company/People/Management/johnie.jpg"
                  secure="true"
                  alt="Johnie Hjelm"
                >
                  <Transformation width="400" crop="scale" />
                </ProfileImg>
              </Poly>
            </Box>
          </Container>
        </Section>
        <Section>
          <Container>
            <Box width={[1, 1 / 2]} px={3}>
              <img src={celebrate} alt="Celebrate" />
            </Box>
            <Box width={[1, 1 / 2]} px={3}>
              <h2>Our ethos</h2>
              <h3>Be Different</h3>

              <Text>We approach life & work with a unique perspective.</Text>

              <h3>Be intellectually honest</h3>

              <Text>
                Everyone is direct, honest, and without ego. From our mentors to our CEO, all are
                upfront with feedback.
              </Text>

              <h3>Be meaningful</h3>

              <Text>We strive to create lasting value in everything we do.</Text>

              <h3>Be passionate</h3>

              <Text>We take a stand for what we believe is right.</Text>
            </Box>
          </Container>
        </Section>
        <Section type="gradient">
          <Container>
            <Box width={[1, 1 / 2]} p={3}>
              <h2>Our igniters</h2>
              <Text>
                Over the years we’ve met some amazing people who have embraced our ideas and
                philosophies. We call them Igniters because they were using those ideas to ignite
                positive change in their and other's organizations. We are in awe of their impactful
                work. Today, they work with us, arm-in-arm, to inspire people and advance our
                vision.
              </Text>
              <Text>
                Fredrik and Christofer are two unshakable optimists who believe in a bright future
                and our ability to build it together. We are all marching toward the same vision;
                together we can have greater impact than any of us could have alone.
              </Text>
            </Box>
            <Box width={[1, 1 / 2]} p={3} style={{ overflow: 'hidden' }}>
              <Poly>
                <ProfileImg
                  cloudName="crip"
                  publicId="Company/People/Management/coffe.jpg"
                  secure="true"
                  alt="Viktor Johansson"
                >
                  <Transformation width="400" crop="scale" />
                </ProfileImg>
              </Poly>
              <Poly>
                <ProfileImg
                  cloudName="crip"
                  publicId="Company/People/Management/fredrik.jpg"
                  secure="true"
                  alt="Johnie Hjelm"
                >
                  <Transformation width="400" crop="scale" />
                </ProfileImg>
              </Poly>
            </Box>
          </Container>
        </Section>
        <Section>
          <Container p={3}>
            <Engage theme="light" width={[1, 1 / 2]} py={[5, '10%']} px={[3, 5]}>
              <h2>For Crips</h2>
              <p className="subtitle">Let us launch your career in tech.</p>
              <Text>
                The Nordic tech industry needs you. We are currently missing 30 000 tech
                professionals in Sweden and that number is growing fast.
              </Text>
              <Text>
                We know that you will become the next big software developer or QA consultant within
                our hiring ecosystem. That is why we are investing in you.
              </Text>
              <Btn href="mailto:info@crip.io" theme="light">
                Join us now <i className="icon icon-arrow-right" />
              </Btn>
            </Engage>
            <Engage width={[1, 1 / 2]} py={[5, '10%']} px={[3, 5]}>
              <h2>For Partners</h2>
              <p className="subtitle">We are stronger together.</p>
              <Text>
                Diversity is what makes us who we are. We seek to celebrate our diverse identities.
                Diversity is where we acknowledge that our different backgrounds bring unique
                perspectives to our work.
              </Text>
              <Text>
                Let us show you how we can bring a new generation of software developers and QA's to
                your company by connecting diverse and technical talents to your teams. Pipin' hot,
                directly from Crip in Tech.
              </Text>
              <Btn href="mailto:engage@crip.io">
                Become our partner <i className="icon icon-arrow-right" />
              </Btn>
            </Engage>
          </Container>
        </Section>
      </div>
    )
  }
}

export default withRouteData(Home)
