import React, { Component } from 'react'

export default const Context = React.createContext();

export const ContextConsumer = Context.Consumer;

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "count":7,
             
        }
        this.getData = this.getData.bind(this);
    }
    
    
    getData = (count) =>{
        this.setState({count:this.count})
    }

    render() {
        return (
            <Context.Provider value={{state: this.state, getData: this.getData}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


