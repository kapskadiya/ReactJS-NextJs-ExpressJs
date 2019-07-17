import React, { Component } from 'react'
import ContextProvider, { ContextConsumer } from './Context'


class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "count":0
        }

        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(){
        
        this.setState({count :this.state.count+1});
    }
       
    render() { 
        const co = this.state.count; 
        return (
            <div>
            <ContextConsumer>
                {
                    value => {
                        return (
                        <>
                        <p>counter {value.state.count}</p>
                        </>
                        )
                    }
                }
            </ContextConsumer>
            <button onClick={this.clickHandler}>Click Here {this.state.count}</button>
            </div>
        )
    }

}

const withContext = (Component) => {
    return (props) => {
        <ContextConsumer>
            {(context) => {
                <Component {...props} context={context}/>}}
        </ContextConsumer>
    }
}

export default Counter;