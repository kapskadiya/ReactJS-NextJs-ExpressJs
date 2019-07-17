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
    
    clickHandler(){
        
        this.setState(()=> this.count=this.count+1);
    }
       
    render() {
        return (
            <div>
            <ContextConsumer>
                {
                    value => 
                        <p>{value.count=this.state.count}</p>
                }
            </ContextConsumer>
            <button onClick={this.clickHandler}>Click Here {this.state.count}</button>
            </div>
        )
    }
}
