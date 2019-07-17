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
    const res =await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show =await res.json();   
    return show;
}

export default class Cart extends Component {
    
    static async getInitialProps(ctx){
        const { ids } = ctx.query
        const array = [];
        const a = ids.split(",");
        a.map(id => {
            array = [...array,getData(id)];
        });
        console.log(`Fetched show: ${array}`)
    
        return { show }
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.show.name}</h1>
            </div>
        )
    }
}
