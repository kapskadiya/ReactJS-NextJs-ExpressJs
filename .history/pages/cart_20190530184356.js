import React, { Component } from 'react'
import { Consumer, Provider } from './../components/Context'
import fetch from 'isomorphic-unfetch'

const CartItem = ({list}) => {
    const cartList = list.map(show => {
        let res = fetch(`https://api.tvmaze.com/shows/${show}`);
        let data = res.json();
        console.log("heloo" + data.length);
        return {
            shows: data
        }   
    });
    return (
        <h1>{cartList.name}</h1>
    )
}


export default class Cart extends Component {
    
    
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
