import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import styled from 'styled-components'
import { LogoFull } from '../components/Logo'
//

// const Header = styled.div`
//   background-color: var(--main-color);
//   height: 100vh;
//   display: flex;
//   align-item: center;
//   justify-content: center;
//   position: relative;
//   overflow: hidden;
// `

const Box = styled.div`
  padding: 50px;
  background-color: var(--note-color);
  display: inline-block;
  color: var(--main-color-dark);
`

export default withRouteData(({ jdown, reactStatic }) => (
  <div>
    <div className="header">
      <LogoFull fill="white" />
      <h1>We unlock your potential!</h1>
    </div>
    <div className="header-after" />
    <section>{convert(reactStatic.contents)}</section>
    <section>{convert(jdown.contents)}</section>
    <Box>
      <h1>heeey</h1>
      <p>helloworld ddkdk dmdml</p>
    </Box>
  </div>
))
