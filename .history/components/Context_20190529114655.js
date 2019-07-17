import React, { Component } from 'react'

export const Context = React.createContext();

export const ContextConsumer = Context.Consumer;

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            actions:{
                getData : this.getData
            } 
        }
      //  this.getData = this.getData.bind(this);
    }
    
    
    

    render() {
        console.log("heloo context", this.props.counte);
        getData = () =>{
            this.setState({
                count: this.props.counte
            });
        } 
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}