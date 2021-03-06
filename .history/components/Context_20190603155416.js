import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

export const { Provider, Consumer } = React.createContext();

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wholeData: [],
            count: 0,
            shows: [],
            showId: 1,
            idList: [],
            setWholeData: (data) => {
                console.log("dataa", data)
                this.setState({
                    wholeData: data
                })
            },
            setCart: (id) => {
                this.setState({
                    idList: [...this.state.idList, id]
                })
            },
            removeCart: ({ id }) => {
                var currentCart = this.state.idList;
                currentCart.splice(currentCart.indexOf(id), 1);
                this.setState({
                    idList: currentCart
                })
            },
            getData: ({ value }) => this.setState({ count: value }),
            getGalleryData: () => {
                fetch('https://api.tvmaze.com/shows').then(
                    (response) => {
                        var data = response.json();
                        console.log('getGalleryData');
                        this.setState({
                            shows: data
                        })
                    }
                )

            },
            setList: () => this.setState((state) => { isList: state.isList.push(state.showId) }),
            updateIdList: ({ arrayList }) => this.setState({ idList: arrayList })
        }
    }

    render() {
        console.log("idList :", this.state.idList);

        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}