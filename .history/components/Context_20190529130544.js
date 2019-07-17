import React, { Component } from 'react'

export const { Provider, Consumer } = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: "",
            getData : ({value}) => this.setState({count:value})    
        }
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