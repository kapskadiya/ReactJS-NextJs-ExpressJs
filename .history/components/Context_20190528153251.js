import React, { Component } from 'react'

export const Context = React.createContext();

export const ContextConsumer = Contex.Consumer;

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "count":0,
             "username":"",
             "cartItems":[]

        }
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


