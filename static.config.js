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
          path: 'https://podcast.crip.io',
          name: 'Podcast',
        },
        // {
        //   path: '/about',
        //   name: 'About us',
        // },
        // {
        //   path: '/for-crips',
        //   name: 'For Crips',
        // },
        // {
        //   path: '/for-partners',
        //   name: 'For Partners',
        // },
        // {
        //   path: '/contact',
        //   name: 'Contact',
        // },
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
    const { home, about, privacyPolicy } = await jdown('content')
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
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/assets/favicon/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/assets/favicon/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/assets/favicon/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/assets/favicon/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/assets/favicon/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/assets/favicon/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/assets/favicon/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/assets/favicon/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/assets/favicon/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/assets/favicon/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/assets/favicon/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/assets/favicon/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/assets/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#3b007f" />
            <meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#3b007f" />
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
