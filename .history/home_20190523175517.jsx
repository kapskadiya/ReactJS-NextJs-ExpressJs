import React, { Component } from 'react'
import ContextProvider from './components/Context'

export default class Home extends Component {
    render() {
        return (
            <ContextProvider>
            <div className="container">
                <h1>Kashyap Kadiya</h1>
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
