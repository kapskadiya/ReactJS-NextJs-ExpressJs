import React, { Component } from 'react'
import { ContextConsumer } from './Context'


export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "count":0
        }

        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(c){
        
        this.setState( this.c => { count = c + 1})
    }
       
    render() {
        return (
            <div>
            <ContextConsumer>
                {
                    value => {
                        this.setState( )
                    }
                }
            </ContextConsumer>
            <button onClick={this.clickHandler(this.state.count)}>Click Here {this.state.count}</button>
            </div>
        )
    }
}
