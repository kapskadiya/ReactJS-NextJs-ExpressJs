import React, {Component} from 'react'
import ContextProvider from './components/Context'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Layout from './components/Layout';

export default class Home extends Component {
    render() {
        return ( 
        <> 
            <div className="fluid_container">
                <Layout>
                    {this.props.children}
                </Layout>
            </div> 
            <style global jsx > {
            ` .fluid_container {
                            width: 100%;
                            background: rosybrown;
                        }
                        .container{
                            width: 1440px;
                            margin: 0 auto;
                        }
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing:border-box;
                            font-family: 'Barlow', sans-serif;
                        }
                        .border {
                            border: 1px solid black;
                        }
                        .view{
                            margin-top: 60px;
                            padding-top: 50px;
                        }
                        .main{
                            position:absolute;
                            width:100%;
                            height: 100%;
                            top: 50px;
                            left:0;

                        }
                    
                        .header {
                            top: 0px;
                            left: 50%;
                            margin-left: -735px;
                            position: fixed;
                            background-color: grey;
                            width: 92rem;
                            z-index: 1;
                            text-align: center;
                            display: flex;
                            justify-content: space-between;
                        }
                        .header-corner {
                            display: flex;
                        }
                        .header-child {
                            padding: 10px;
                        }
                        .header-child button{
                            padding:3px;
                            border-radius: 5px;
                            outline : none;
                        }
                        .header-child input[type="text"] {
                            border: none;
                            outline: none;
                            width: 30px;
                            transition:all 0.3s linear;
                            padding:3px;
                            border-radius: 10px;
                        }
                        .header-child input[type="text"]:focus {
                            width:200px;
                        }
                        .cart-counter{
                            border:0.5px solid black;
                            border-radius: 5px;
                            padding: 2px 5px;
                            
                        }
                         `
            } 
            </style>
        </>
        )
    }
}
