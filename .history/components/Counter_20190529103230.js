import React, { Component } from 'react'
import ContextProvider, { ContextConsumer } from './Context.js'


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
        this.props.context.getData(this.state.count);
    }
       
    render() {  
        return (
            <div>
                <button onClick={this.clickHandler}>Click Here {this.state.count}</button>
            </div>
        )
    }

}

const withContext = (Component) => {
    return (props) => {
        <ContextConsumer>
            {(context) => {
               return <Component {...props} context={context}/>}}
        </ContextConsumer>
    }
}

export default withContext(Counter);