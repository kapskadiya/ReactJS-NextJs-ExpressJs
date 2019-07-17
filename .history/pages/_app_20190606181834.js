import App, {Container} from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../components/Context";
import Home from "../home";
import Head from "next/head";

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
      }
   
    render() {
        const {Component, pageProps} = this.props;

        return ( 
            <Container> 
                <Head>
                    <title>ShowCase</title>
                    <link rel="shortcut icon" href="https://s19191.pcdn.co/wp-content/uploads/sites/3/2017/05/cropped-favicon-300x300.png"/>
                    <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet"></link>
                    <link href="./ReactToastify.min.css" rel="stylesheet"></link>
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