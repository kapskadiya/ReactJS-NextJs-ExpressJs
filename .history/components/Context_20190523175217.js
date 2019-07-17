import React, { Component } from 'react'

const Context = React.createContext();

export default class Context extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "username":"",

        }
    }
    
    render() {
        return (
            <Context.Provider value={this.state}>

            </Context.Provider>
        )
    }
}


