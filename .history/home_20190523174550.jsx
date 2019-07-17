import React, { Component } from 'react'

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
                    body{
                        border: 1px solid black;
                    }
                `}
            </style>
            </>
        )
    }
}
