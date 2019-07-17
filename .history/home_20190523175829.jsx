import React, { Component } from 'react'
import ContextProvider from './components/Context'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'

export default class Home extends Component {
    render() {
        return (
            <ContextProvider>
            <div className="container">
                <Header/>
                <SideBar />
                <Main />
            </div>
            <style global jsx>
                {`
                    .container{
                        width: 1140px;
                        margin: 0 auto;

                    }
                    
                `}
            </style>
            </ContextProvider>
        )
    }
}
