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


export default class Cart extends Component {
    
    static async getInitialProps(ctx){
        const { ids } = ctx.query
        console.log(ids);
        const id = ids[0];
            const res =await fetch(`https://api.tvmaze.com/shows/${id}`)
            const show1 =await res.json()
        
        // const show ids.map(id => {
        //     return show;
        // });
        
        console.log(`Fetched show: ${show.name}`)
    
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
