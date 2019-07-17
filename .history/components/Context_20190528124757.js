import React, { Component } from 'react'

const Context = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
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


