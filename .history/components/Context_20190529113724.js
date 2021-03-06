import React, { Component } from 'react'

export const Context = React.createContext();

export const ContextConsumer = Context.Consumer;

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:this.props.counte,
            actions:{
                getData : this.getData
            } 
        }
        this.getData = this.getData.bind(this);
    }
    
    
    getData = () =>{
        this.setState({
            count: this.props.counte
        });
    }

    render() {
        console.log("heloo context", this.state.count);
        return (
            <Context.Provider onCallback={this.getData} value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}