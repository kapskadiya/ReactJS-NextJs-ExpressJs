import App, {Container} from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../components/Context";
import Home from "../home";
import Head from "next/head";

export default class MyApp extends App {

   
    render() {
        const {Component, pageProps} = this.props;

        return ( 
            <Container> 
                <Head>
                    <title>ShowCase</title>
                    <link name="shortcut-icon" href="https://static1.squarespace.com/static/5a834796d0e6282b85eb38c5/t/5a8347e971c10b8c4a544fe7/favicon.ico"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                </Head>
                <ContextProvider> 
                    <Home> 
                        <Component {...pageProps}/>
                    </Home> 
                </ContextProvider> 
            </Container>
        )
    }
}