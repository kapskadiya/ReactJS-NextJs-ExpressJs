import App, { Container } from "next/app";
import Layout from "../components/Layout";

export default class MyApp extends App {

    static async getInitialProps({Component, ctx}){

    }

    render(){
        return (
            <Container>
                <Layout>
                    
                </Layout>
            </Container>
        )
    }
}