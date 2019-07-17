import App, {Container} from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../components/Context";
import Home from "../home";

export default class MyApp extends App {

   
    render() {
        const {Component, pageProps} = this.props;
        console.log(Component)
        return ( 
            <Container> 
                <ContextProvider> 
                    <Home> 
                        <Component {...pageProps}/>
                    </Home> 
                </ContextProvider> 
            </Container>
        )
    }
}