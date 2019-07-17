import React, { Component } from 'react'
import { Context } from './Context'

const clickHandler = (count) => {
    setState( () => this.count=count+1)
}

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "count":0
        }
    }
    
   
    render() {
        return (
            <div>
            <Context.Consumer>
                {
                    value => {
                        <button onClick={clickHandler(value.count)}>Click Here</button>
                    }
                }
            </Context.Consumer>
                
            </div>
        )
    }
}
