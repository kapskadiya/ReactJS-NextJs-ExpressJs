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
            <div className="fluid_container">
                <video id="background_video" loop autoPlay>
                    <source src="./static/video.mp4" type="video/mp4"></source>
                </video>
                <ToastContainer/>
                <Layout>
                    {this.props.children}
                </Layout>
            </div> 
            <style global jsx > {
                        ` .fluid_container {
                            width: 100%;
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
                        #background_video{
                            position: fixed;
                            width: 100vw;
                            z-index: -1;
                        }
                        #background_video source::before{
                            content: '';
                            opacity: 0.6;
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
