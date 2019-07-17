import React, { Component } from 'react'
import { Consumer, Provider } from './../components/Context'
import fetch from 'isomorphic-unfetch'

const CartItem =async ({list}) => {
    console.log(list);
    // const cartList = list.map(show => {
    //     let res = fetch(`https://api.tvmaze.com/shows/${show}`);
    //     let data = res.json();
    //     console.log("heloo" + data.length);
    //     return {
    //         shows: data
    //     }   
    // });
     return (
        <>
        <h1>Hello</h1>
        </>
    )
}

const getData = async (id) => {
    const res =await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show =await res.json();   
    return {as: show};
}
const functionWithPromise = item => { //a function that returns a promise
    const res =fetch(`https://api.tvmaze.com/shows/${item}`)
    const show =res.json(); 
            
    return Promise.resolve(show)
  }
const anAsyncFunction = async item => {
    return await functionWithPromise(item)
  }

export default class Cart extends Component {
    
    static async getInitialProps(ctx){
        const { ids } = ctx.query
        var idsArr = ids.split(",");
        console.log("idsArr", idsArr);
        var arr = [];
        var newarr = idsArr.map(id => anAsyncFunction(id));
        console.log("array", newarr);
         return await Promise.all(newarr);
    }
    
    render() {
        console.log("poooo", this.props);
        return (
            <div>
                <h1>{this.props.newarr}</h1>
            </div>
        )
    }
}
