import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export const { Provider, Consumer } = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wholeData: [],
            count: 0,
            showId: 1,
            idList: [],
            setWholeData: () => { 
                console.log("dataa", data)
                
                this.setState({
                    wholeData: this.getWholeData()
                })
            },
            setCart: (id) =>{ 
                this.setState({
                    idList: [...this.state.idList,id]
                })
            },
            removeCart: ({id}) => {
                var currentCart = this.state.idList;
                currentCart.splice(currentCart.indexOf(id), 1 );
                this.setState({
                    idList: currentCart
                })
            },
            getData : ({value}) => this.setState({count:value}),
            setList : () => this.setState((state) => {isList: state.isList.push(state.showId)}),
            updateIdList : ({arrayList}) => this.setState({idList: arrayList})    
        }
    }

    getWholeData =async () => {
        const res = await fetch('https://api.tvmaze.com/shows');
        console.log(res,'res')
        const data = await res.json();
        return {
            shows: data
        }
    }

   render() {
        console.log("idList :",this.state.idList);
        console.log("wholeData in context",this.props)
        
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}