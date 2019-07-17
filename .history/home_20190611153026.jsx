import React, {Component} from 'react'
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';
import {Context} from './components/Context'

export default class Home extends Component {
    static contextType = Context;
    render() {
        const {style} = this.context.theme;
        return ( 
        <> 
            <div className="fluid_container" style={style}>
                <ToastContainer/>
                <Layout>
                    {this.props.children}
                </Layout>
            </div> 
            <style global jsx > {
                        ` .fluid_container {
                            width: 100%;
                            background-attachment: fixed;
                            background-image: url(http://wallpoper.com/images/00/31/33/51/black-background_00313351.jpg);
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
                            margin-top: 58px;
                            padding-top: 50px;
                        }
                        .main{
                            height: 100rem;

                        }
                    
                        .header {
                            top: 0px;
                            left: 50%;
                            margin-left: -735px;
                            position: fixed;
                            width: 92rem;
                            z-index: 1;
                            text-align: center;
                            display: flex;
                            justify-content: space-between;
                        }
                        .header-corner {
                            display: flex;
                            align-items: center;
                        }
                        .header-child {
                            padding: 10px;
                            width: 100%;
                        }
                        .header-child button{
                            padding: 3px;
                            outline: none;
                            background: transparent;
                            border: none;
                            cursor: pointer;
                            font-size: 1em;
                            color: black; 
                        }
                        .header-child input[type="text"] {
                            border: none;
                            outline: none;
                            width: 70px;
                            transition:all 0.3s linear;
                            padding:5px;
                            border-radius: 10px;
                        }
                        .header-child input[type="text"]:focus {
                            width:200px;
                        }
                        .cart-counter{
                            padding: 2px 5px;
                            
                        }
                        .toast{
                            position: absolute;
                            right: 0;
                            top: 50%;
                            z-index: 2;
                            border: 1px solid black;
                            background: lightcyan;
                        
                            border-radius: 10px;
                        }
                         `
            } 
            </style>
        </>
        )
    }
}
