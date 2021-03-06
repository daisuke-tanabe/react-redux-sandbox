// https://github.com/zeit/next.js/blob/canary/examples/with-redux/pages/_app.js

import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import GlobalStyle from '../styles/global';

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <GlobalStyle />
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
