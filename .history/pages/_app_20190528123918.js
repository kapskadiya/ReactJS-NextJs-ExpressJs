import App, { Container } from "next/app";
import Layout from "../components/Layout";

export default class MyApp extends App {

    static async getInitialProps({Component, ctx}){
        let pageProps = {};
        console.log("_app getInitialProps", Component)
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };  
    }

    render(){
        const { Component, pageProps } = this.props;
    
        return (
            <Container>
                <Layout>
                    <Component />
                </Layout>
            </Container>
        )
    }
}