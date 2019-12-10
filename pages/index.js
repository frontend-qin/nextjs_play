import React, { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
const Home = () => {
  useEffect(() => {
    Router.push('/home')
  }, [])
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  )
}

export default Home
