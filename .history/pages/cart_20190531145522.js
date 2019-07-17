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
            value="Remove"
            onClick= {(e) => {
                console.log("aa e 6e",e)
                return onClick({idList: arrayRemove(list, value)});
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
                                    ({idList,updateIdList }) => <Input onClick={updateIdList} list={idList} value={show.id}/>
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
