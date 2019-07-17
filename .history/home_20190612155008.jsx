import React, {Component} from 'react'
import Layout from './components/Layout';
import { ToastContainer } from 'react-toastify';
import {Context} from './components/Context'

export default class Home extends Component {
    static contextType = Context;
    render() {
        const {style} = this.context.theme;
        return ( 
        <> <video id="background_video" loop autoPlay>
        <source src="./static/video.mp4" type="video/mp4"></source>
    </video>
    
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
                        #background_video{
                            width: 100%; 
                            height: 100%;
                            position: fixed;
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
