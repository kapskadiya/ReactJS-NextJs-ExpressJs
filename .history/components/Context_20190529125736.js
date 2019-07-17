import React, { Component } from 'react'

export const { Provider, Consumer } = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            getData : ({value}) => this.setState({count:value})
             
        }
        this.getData = this.getData.bind(this);
    }
    
    
    
    render() {
        console.log("heloo context", this.props.counte);
        
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}