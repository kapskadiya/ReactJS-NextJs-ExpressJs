import React, { Component } from 'react'
import { Context } from './Context'


export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "count":0
        }

        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(count){
        this.setState(() => this.count= this.count + 1)
    }
       
    render() {
        return (
            <div>
            <Context.Consumer>
                {
                    value => {
                        
                    }
                }
            </Context.Consumer>
            <button onClick={this.clickHandler(this.state.count)}>Click Here</button>
            </div>
        )
    }
}
