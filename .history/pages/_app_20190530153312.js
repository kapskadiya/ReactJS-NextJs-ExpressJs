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
                    <link rel="shortcut icon" href="https://nechstar.com/software/wp-content/uploads/2018/10/Nechstar-Favicon.png"/>
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