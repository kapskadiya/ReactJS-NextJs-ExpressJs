import React, { Component } from 'react'
import ContextProvider from './components/Context'
import moduleName from './components/Header'
import moduleName from './components/SideBar'
import moduleName from './components/Main'

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
