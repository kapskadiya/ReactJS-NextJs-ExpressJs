import React, { Component } from 'react'
import { Context } from './Context'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "count":0
        }
    }
    
    clickHandler = (count) => {
        setState( () => this.count=count+1)
    }

    render() {
        return (
            <div>
            <Context.Consumer>
                {
                    value => {
                        <button onClick="clickHandler">Click Here</button>
                    }
                }
            </Context.Consumer>
                
            </div>
        )
    }
}
