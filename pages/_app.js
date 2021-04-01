import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import {Provider} from 'react-redux'
import Head from "next/head";
import "../src/styles/main.scss";

class MyApp extends App {

    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (
            <Provider store={reduxStore}>
                <Head>
                    <meta name="robots" content="none"/>
                    <title></title>
                </Head>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)
