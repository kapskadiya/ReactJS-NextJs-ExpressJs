import React, { Component } from 'react'
import { Consumer, Provider } from './../components/Context'
import fetch from 'isomorphic-unfetch'


export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.CartItem = this.CartItem.bind(this);
    }
   
    CartItem = ({list}) => {
        cartList = list.map(show => {
            let res = await fetch(`https://api.tvmaze.com/shows/${show}`);
            let data = await res.json();
            console.log("heloo" + data.length);
            return {
                shows: data
            }   
        });
        return (
            <h1>{cartList.name}</h1>
        )
    }
    
    render() {
        return (
            <div>
                <Consumer>
                    {
                        ({idList}) => <CartItem list={idList}/>
                    }
                </Consumer>
            </div>
        )
    }
}
