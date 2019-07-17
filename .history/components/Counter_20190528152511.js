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
        this.setState(() => this.count= this.count)
    }
       
    render() {
        return (
            <div>
            <Context.Consumer>
                {
                    value => {
                        <button onClick={this.clickHandler(value.count)}>Click Here</button>
                    }
                }
            </Context.Consumer>
                
            </div>
        )
    }
}
