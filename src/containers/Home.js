import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import { LogoWrapper } from '../components/logo'
import styled from 'styled-components'
//

const Header = styled.div`
  background-color: var(--main-color);
  height: 100vh;
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const Beam = styled.div`
  position: absolute;
  width: 5px;
  height: 400px;
  top: ${props => (props.top ? props.top : '140')}px;
  left: ${props => (props.left ? props.left : '150')}px;
  background-color: var(--secondary-color);
  background-image: linear-gradient(var(--secondary-color), var(--main-color));
  transform: rotate(45deg);
  transform-origin: center center;
  border-radius: 100px;
`

export default withRouteData(({ jdown, reactStatic }) => (
  <div>
    <Header>
      <LogoWrapper width="6em" color="#f5f3f9" />
    </Header>
    <section>{convert(reactStatic.contents)}</section>
    <section>{convert(jdown.contents)}</section>
  </div>
))
