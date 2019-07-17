import React, { Component } from 'react'
import Context from './components/Context'

export default class Home extends Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}
