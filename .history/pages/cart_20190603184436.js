import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import s from './style.module.css';
import { Consumer} from './../components/Context'


const anAsyncFunction = async item => {
    const res =await fetch(`https://api.tvmaze.com/shows/${item}`)
    const show =await res.json(); 
    
    return await Promise.resolve(show);
  }

export default class Cart extends Component { 
    static contextType = Consumer;
    constructor(props) {
        super(props)
    
        this.state = {
             cartList: this.props.shows
        }
        this.removeItem = this.removeItem.bind(this);
        }
    
    
    static async getInitialProps(ctx){
        const { ids } = ctx.query
        var idsArr = ids.split(",");
         const abc =await Promise.all(idsArr.map(id => anAsyncFunction(id)));
         return {shows : abc}
    }
    
    removeItem =(id) => {
        const updatedCart = this.state.cartList.filter(show => show.id !==id);
        this.setState({cartList: updatedCart});
        this.context.removeCart(id);
    }

    render() {
        
        return (
            <div className={s.card_display}>
                <h1>Your Cart</h1>
                <ul className={s.cart_card}>
                {this.state
                    .cartList
                    .map((show,index) => (
                        <li key={'show'+index}>
                            <img src={show.image.medium}/>
                            <h3>{show.name}</h3>
                            <div className={s.remove_cart}>
                                <button onClick={() => this.removeItem(show.id)}>Remove</button>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
