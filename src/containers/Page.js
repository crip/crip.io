import React from 'react'
import { withRouteData, Head, scrollTo } from 'react-static'
import convert from 'htmr'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { SmallHeader } from '../components/header'
import Navigation from '../components/navigation'

//

const PageTitle = styled.h1`
  color: white;

  @media (max-width: 32em) {
    font-size: 2.5em;
  }
`

const Line = styled.div`
  width: 40px;
  height: 4px;
  background-color: var(--secondary-color);
  margin-bottom: 2em;
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

  @media (max-width: 32em) {
    p {
      font-size: 1em;
    }
  }
`

const ReadMoreBtn = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  cursor: pointer;

  .icon {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: solid 2px rgba(255, 255, 255, 0.2);
    color: #fff;
    margin-right: 20px;
    font-size: 1rem;
    transition: inherit;
    cursor: pointer;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: #fff;

    .icon {
      border: solid 2px rgba(255, 255, 255, 0.4);
      text-decoration: none;
    }
  }

  @media (max-width: 32em) {
    .icon {
      width: 34px;
      height: 34px;
    }
  }
`

const ReadMore = ({ subtitle = 'Read more' }) => {
  const cnt = document.querySelector('.maincontent')
  if (typeof document !== 'undefined' && cnt) {
    return (
      <ReadMoreBtn onClick={() => scrollTo(cnt, { duration: 250 })}>
        <i className="icon icon-arrow-down" />
        <span>{subtitle}</span>
      </ReadMoreBtn>
    )
  }

  return null
}

export default withRouteData(({ page }) => (
  <div>
    <Head title={page.title} />
    <Navigation />
    <SmallHeader>
      <Box width={[1, 1 / 2]} py={[4, 5]}>
        <Line />
        <PageTitle>{page.title}</PageTitle>
      </Box>
      <Box width={[1, 'auto']} ml="auto">
        <ReadMore subtitle={page.subtitle} />
      </Box>
    </SmallHeader>
    <Content p={3} className="maincontent">
      {convert(page.contents)}
    </Content>
  </div>
))
