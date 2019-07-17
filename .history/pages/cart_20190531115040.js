import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import s from './style.module.css';


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
            <div className={s.card_display}>
                <ul className={s.card}>
                {this.props
                    .shows
                    .map(show => (
                        <li key={show.id}>
                            <Link href={`/post?id=${show.id}`}>
                                 <img src={show.image.medium}/>
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
