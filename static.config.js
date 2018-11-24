import React, { Component } from 'react'
import path from 'path'
import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import { ServerStyleSheet } from 'styled-components'

if (!process.env.PROD) {
  const configSetup = require('./config_setup')
  configSetup(require('./config.json'))
}

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'Crip in Tech',
    slogan: 'We are set to make a difference in the tech industry',
    menus: {
      main: [
        {
          path: '/',
          name: 'Home',
        },
        {
          path: '/about',
          name: 'About us',
        },
        {
          path: '/for-crips',
          name: 'For Crips',
        },
        {
          path: '/for-partners',
          name: 'For Partners',
        },
        {
          path: '/contact',
          name: 'Contact',
        },
      ],
      legal: [
        {
          path: '/cookies',
          name: 'Cookies',
        },
        {
          path: '/privacy',
          name: 'Privacy policy',
        },
        {
          path: '/terms',
          name: 'Terms and conditions',
        },
      ],
      follow: [
        {
          path: 'https://www.linkedin.com/company/cripintech/',
          name: 'Linkedin',
        },
        {
          path: 'https://facebook.com/cripintech/',
          name: 'Facebook',
        },
        {
          path: 'https://instagram.com/cripintech/',
          name: 'Instagram',
        },
        {
          path: 'https://twitter.com/cripintech/',
          name: 'Twitter',
        },
        {
          path: 'https://github.com/crip/',
          name: 'Github',
        },
      ],
    },
  }),
  getRoutes: async () => {
    const {
      posts, home, about, privacyPolicy,
    } = await jdown('content')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          ...home,
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => ({
          about,
        }),
      },
      {
        path: '/privacy',
        component: 'src/containers/Page',
        getData: () => ({
          page: privacyPolicy,
        }),
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900"
              rel="stylesheet"
            />
            {renderMeta.styleTags}
            <script async src="https://www.google-analytics.com/analytics.js" />
            <script async src="/assets/js/autotrack.custom.js" />
            <script async src="//d2wy8f7a9ursnm.cloudfront.net/v4/bugsnag.min.js" />
            <script async src="https://embed.small.chat/TANCJ6NKBGDS2R3CCS.js" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve(__dirname, './public'))
    return config
  },
}
