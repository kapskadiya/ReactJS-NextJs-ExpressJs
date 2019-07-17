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
const Input = ({onClick, list, removeId}) => {
    console.log("list 6e bhai",list);
    if(list!==undefined){
    const newList = arrayRemove(list, removeId);
    console.log("new array: ",newList);
    return (
        <input 
            type="button"
            value="Remove"
            onClick= {() => {
                return onClick({idList: newList});
                }}
        />
    )
    }
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
                <h1>Your Cart</h1>
                <ul className={s.cart_card}>
                {this.props
                    .shows
                    .map(show => (
                        <li key={show.id}>
                            <>
                                 <img src={show.image.medium}/>
                            </>
                            <h3>{show.name}</h3>
                            <Consumer>
                                {
                                    ({idList,updateIdList }) => <Input onClick={updateIdList} list={idList} removeId={show.id}/>
                                }
                            </Consumer>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}
