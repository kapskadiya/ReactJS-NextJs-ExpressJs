import React, { Component } from 'react'
import { Consumer, Provider } from './../components/Context'
import fetch from 'isomorphic-unfetch'

const CartItem =async ({list}) => {
    const cartList = list.map(show => {
        let res =await fetch(`https://api.tvmaze.com/shows/${show}`);
        let data =await res.json();
        console.log("heloo" + data.length);
        return {
            shows: data
        }   
    });
    return (
        <>
        {cartList.map(card => <h1>{card.name}</h1>)}
        </>
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
