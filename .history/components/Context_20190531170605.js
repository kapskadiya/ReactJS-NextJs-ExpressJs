import React, { Component } from 'react'

export const { Provider, Consumer } = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            cartItem: 0,
            showId: 1,
            idList: [],
            setCart : ({value, id}) => this.setState({cartItem:value, idList: [...this.state.idList,id]}),
            getData : ({value}) => this.setState({count:value}),
            setList : () => this.setState((state) => {isList: state.isList.push(state.showId)}),
            updateIdList : ({arrayList}) => this.setState({idList: arrayList, cartItem: this.state.idList.length})    
        }
    }
    
    render() {
        console.log("idList :",this.state.idList);
        console.log(" updated idList :",this.state.idList);
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}