import React from 'react'
import { Flex } from '@rebass/grid'
import wavesLarge from 'assets/images/waves.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const Header = styled.div`
  background-color: var(--main-color-dark);
  color: white;
  padding-top: 80px;
  position: relative;
`

const Inner = styled(Flex)`
  max-width: var(--main-width);
  margin: 0 auto;
`

const HeaderWavesLarge = styled.img`
  position: relative;
  top: -1px;
  width: 101%;
  height: auto;
`

const HeaderWavesSmall = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: transparent url('assets/images/wave-blue.svg') top left repeat-x;
  animation: wave 6s linear infinite;
  margin-bottom: 2em;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: transparent url('assets/images/wave-green.svg') top center repeat-x;
  }

  @media (max-width: 32em) {
  }
`

const HeroHeader = ({ children }) => (
  <HeaderWrapper>
    <Header>
      <Inner alignItems="baseline">{children}</Inner>
    </Header>
    <HeaderWavesLarge src={wavesLarge} />
  </HeaderWrapper>
)

const SmallHeader = ({ children }) => (
  <HeaderWrapper>
    <Header>
      <Inner alignItems="center" justifyContent="center">
        {children}
      </Inner>
    </Header>
    <HeaderWavesSmall />
  </HeaderWrapper>
)

export { HeroHeader, SmallHeader }
