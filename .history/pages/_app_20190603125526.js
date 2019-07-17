import App, {Container} from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../components/Context";
import Home from "../home";
import Head from "next/head";
import fetch from 'isomorphic-unfetch'


export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
        const res = await fetch('https://api.tvmaze.com/shows');
        console.log(res,'res');
        const data = await res.json();
        return { pageProps:pageProps, shows: data }
      }
   
    render() {
        const {Component, pageProps, shows} = this.props;

        return ( 
            <Container> 
                <Head>
                    <title>ShowCase</title>
                    <link rel="shortcut icon" href="https://s19191.pcdn.co/wp-content/uploads/sites/3/2017/05/cropped-favicon-300x300.png"/>
                    <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet"></link>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                </Head>
                <ContextProvider shows={shows}> 
                    <Home> 
                        <Component {...pageProps}/>
                    </Home> 
                </ContextProvider> 
            </Container>
        )
    }
}