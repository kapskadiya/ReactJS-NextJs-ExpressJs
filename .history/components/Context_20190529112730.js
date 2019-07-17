import React, { Component } from 'react'

export const Context = React.createContext();

export const ContextConsumer = Context.Consumer;

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:this.props.count,
            actions:{
                getData : this.getData
            } 
        }
        this.getData = this.getData.bind(this);
    }
    
    
    getData = (count) =>{
        this.setState({
            count: count
        });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}