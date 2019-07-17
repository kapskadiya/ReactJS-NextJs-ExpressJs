import React, {Component} from 'react'
import ContextProvider from './components/Context'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Layout from './components/Layout';

export default class Home extends Component {
    render() {
        return (
            <ContextProvider>
                <div className="fluid_container">
                    <Layout>
                        {this.props.children}
                    </Layout>
                </div>
                <style global jsx>
                    {
                        ` .fluid_container {
                            width: 100%;
                            margin: 0 auto;
                            background: #515A5A;
                        }
                        .container{
                            width: 1440px;
                            margin: 0 auto;
                        }
                        *{
                            margin: 0;
                            padding: 0;
                        }
                        .border {
                            border: 1px solid black;
                        }
                        .header {
                            display: flex;
                            justify-content: space-between;
                            
                        }
                        .header-corner {
                            display: flex;
                        }
                        .header-child {
                            padding: 10px;
                        }
                        .header-child input[type="text"] {
                            border: none;
                            outline: none;
                            width:20px;
                            transition:all 0.3s linear;
                            padding:3px;
                            border-radius: 10px;
                        }
                        .header-child input[type="text"]:focus {
                            width:200px;
                        }
                         `
                    }</style>
            </ContextProvider>
        )
    }
}
