import React, { Component } from 'react'

export const { Provider, Consumer } = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            cartItem: 0,
            showId: 1,
            idList: [1],
            setCart : ({value, id}) => this.setState({cartItem:value, isList: [...this.state.isList,id] }),
            getData : ({value}) => this.setState({count:value}),
            setList : () => this.setState((state) => {isList: state.isList.push(state.showId)})    
        }
    }
    
    render() {
        console.log(this.state.isList);
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}