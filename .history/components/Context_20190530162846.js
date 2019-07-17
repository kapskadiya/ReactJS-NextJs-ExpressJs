import React, { Component } from 'react'

export const { Provider, Consumer } = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            cartItem: 0,
            showId: 0,
            setCart : ({value}) => this.setState({cartItem:value}),
            setShowId : ({value}) => this.setState({ShowId:value}),
            getData : ({value}) => this.setState({count:value})    
        }
    }
    
    render() {
        
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}