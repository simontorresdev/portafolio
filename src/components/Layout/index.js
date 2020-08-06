import React from 'react'
import Header from '../Header'
import { Helmet } from 'react-helmet'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { MyMain } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyles />
      <Header />
      <MyMain>{children}</MyMain>
    </>
  )
}

export default Layout
