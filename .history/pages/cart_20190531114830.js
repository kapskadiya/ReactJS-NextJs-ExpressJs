import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

const anAsyncFunction = async item => {
    const res =await fetch(`https://api.tvmaze.com/shows/${item}`)
    const show =await res.json(); 
    
    return await Promise.resolve(show);
  }

export default class Cart extends Component {
    
    static async getInitialProps(ctx){
        const { ids } = ctx.query
        var idsArr = ids.split(",");
         const abc =await Promise.all(idsArr.map(id => anAsyncFunction(id)));
         return {shows : abc}
    }
    
    render() {
        return (
            <div>
                {this.props.shows.map(show => <h1>{show.name}</h1>)}
            </div>
        )
    }
}
