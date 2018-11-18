import React from 'react'
import wavesLarge from 'assets/images/waves.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
`

const Header = styled.div`
  background-color: var(--main-color-dark);
  color: white;
`

const Inner = styled.div`
  max-width: var(--main-width);
  margin: 0 auto;
  padding: 50px 0;
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
      <Inner>{children}</Inner>
    </Header>
    <HeaderWavesLarge src={wavesLarge} />
  </HeaderWrapper>
)

const SmallHeader = ({ children }) => (
  <HeaderWrapper>
    <Header>
      <Inner>{children}</Inner>
    </Header>
  </HeaderWrapper>
)

export { HeroHeader, SmallHeader }
