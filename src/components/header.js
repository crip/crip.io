import React from 'react'
import { Flex } from '@rebass/grid'
import wavesLarge from 'assets/images/waves.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
`

const Header = styled.div`
  background-color: var(--main-color-dark);
  color: white;
  padding-top: 80px;
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
  </HeaderWrapper>
)

export { HeroHeader, SmallHeader }
