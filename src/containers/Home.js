import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import { LogoFull } from '../components/logo'
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

export default withRouteData(({ jdown, reactStatic }) => (
  <div>
    <div className="header">
      <LogoFull fill="white" />
      <h1>We unlock your potential!</h1>
    </div>
    <div className="header-after" />
    <section>{convert(reactStatic.contents)}</section>
    <section>{convert(jdown.contents)}</section>
  </div>
))
