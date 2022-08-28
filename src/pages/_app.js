import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Leonardo Pereira | Sociedade de Advocacia</title>
        <link rel="shortcut icon" href="/favicon.ico" />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Raleway:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
