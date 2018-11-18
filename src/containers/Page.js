import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import styled from 'styled-components'
import { SmallHeader } from '../components/header'
import Navigation from '../components/navigation'

//

const PageTitle = styled.h1`
  color: white;
  text-align: center;
  padding: 1.5em 0;
`

const Content = styled.div`
  max-width: var(--main-width);
  margin: 0 auto;
  padding: 1.5em 0;

  p {
    font-size: 1.2em;
    line-height: 1.68;
    margin-bottom: 2em;
    color: #444;
  }

  a {
    color: var(--main-color);
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 0;
  }
`

export default withRouteData(({ page }) => (
  <div>
    <Navigation />
    <SmallHeader>
      <PageTitle>{page.title}</PageTitle>
    </SmallHeader>
    <Content>{convert(page.contents)}</Content>
  </div>
))
