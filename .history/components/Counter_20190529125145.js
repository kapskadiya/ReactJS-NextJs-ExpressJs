import React, { Component } from 'react'
import { Provider, Consumer } from './Context'
import Parent from './Parent';


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
            <Consumer>
                {
                    value => {
                        return (
                        <>
                        
                        <button onClick={this.clickHandler}>Click Here {this.state.count}</button>
            
                        <p>counter {value.count} </p>
                        <Provider counte={this.state.count}/>
                    
                        </>
                        )
                    }
                }
            </Consumer>
            </div>
        )
    }

}

const withContext = (Component) => {
    return (props) => {
        <Consumer>
            {(context) => {
                <Component {...props} context={context}/>}}
        </Consumer>
    }
}

export default Counter;