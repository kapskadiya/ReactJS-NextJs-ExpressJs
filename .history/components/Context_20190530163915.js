import React, { Component } from 'react'

export const { Provider, Consumer } = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            cartItem: 0,
            showId: [],
            setCart : ({value, id}) => this.setState({cartItem:value, showId:id}),
            getData : ({value}) => this.setState({count:value})    
        }
    }
    
    render() {
        console.log(this.state.showId);
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}