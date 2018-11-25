import React from 'react'
import { withRouteData, Head } from 'react-static'
import convert from 'htmr'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { SmallHeader } from '../components/header'
import Navigation from '../components/navigation'

//

const PageTitle = styled.h1`
  color: white;
  text-align: center;
  padding: 1.5em 0;

  @media (max-width: 32em) {
    padding: 0 16px 1.5em;
    font-size: 2.5em;
  }
`

const Content = styled(Box)`
  max-width: 800px;
  margin: 0 auto;

  p {
    font-size: 1.2em;
    line-height: 1.68;
    margin-bottom: 2em;
    color: #444;
  }

  a {
    color: var(--main-color);
    text-decoration: none;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 0;
  }
`

export default withRouteData(({ page }) => (
  <div>
    <Head title={page.title} />
    <Navigation />
    <SmallHeader>
      <PageTitle>{page.title}</PageTitle>
    </SmallHeader>
    <Content p={3}>{convert(page.contents)}</Content>
  </div>
))
