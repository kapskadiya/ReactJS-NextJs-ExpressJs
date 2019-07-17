import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import s from './style.module.css';
import { Consumer, Provider } from './../components/Context'


const anAsyncFunction = async item => {
    const res =await fetch(`https://api.tvmaze.com/shows/${item}`)
    const show =await res.json(); 
    
    return await Promise.resolve(show);
  }

  function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
 
 }
const Input = ({onClick, list, value}) => {
    console.log("list 6e bhai",list);
    console.log("remove ID :",value);
    if(list!==undefined){
    return (
        <input 
            type="button"
            value={value}
            onClick= {(e) => {
                console.log("aa e 6e",e.target)
                console.log("bhaiaaa",list.splice(value,1))
                return onClick({idList: list.splice(value,1)});
                }}
        />
    )
    }
}


export default class Cart extends Component { 
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
        alert(id);
        const updatedCart = this.state.cartList.filter(show => show.id !==id);
        this.setState({cartList: updatedCart});
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
                            <>
                                 <img src={show.image.medium}/>
                            </>
                            <h3>{show.name}</h3>
                            <button onClick={() => this.removeItem(show.id)}>Remove</button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
