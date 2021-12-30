import Head from 'next/head'
import React from 'react'

type HeaderProps = {
  title: string
  descriptionContent: string
  keywordsContent: string
}
const Header = ({
  title,
  descriptionContent,
  keywordsContent,
}: HeaderProps): JSX.Element => {
  return (
    <Head>
      <title>{`Simplecyto.com | ${title}`}</title>
      <meta name="description" content={descriptionContent} />
      <meta name="keywords" content={keywordsContent} />
      <meta property="og:description" content={descriptionContent} />
      <meta property="og:keywords" content={keywordsContent} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="author" content="Simplecyto.com" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Header
