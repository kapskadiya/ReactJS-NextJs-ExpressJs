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

const getData =async (id) => {
    return {shows:show};
}

export default class Cart extends Component {
    
    static async getInitialProps(ctx){
        const { ids } = ctx.query
        const a = ids.split(",");
        console.log("dddd",a);
        const res =await fetch(`https://api.tvmaze.com/shows/${a[1]}`)
        const show =await res.json();   
    
        // var show = a.map(id => {
        //     return getData(id);
        // });
         return { show: show }
    }
    
    render() {
        console.log("poooo", this.props);
        return (
            <div>
                <h1>{this.props.show.name}</h1>
            </div>
        )
    }
}
