import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script async defer data-website-id="a3cfaf53-658d-41be-b4a3-269f469473cd" src="https://umami-weld.vercel.app/umami.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
