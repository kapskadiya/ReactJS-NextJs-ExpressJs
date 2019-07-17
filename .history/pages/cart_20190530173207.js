import React, { Component } from 'react'
import { Consumer, Provider } from './../components/Context'
import fetch from 'isomorphic-unfetch'


export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.CartItem = this.CartItem.bind(this);
    }
   
    static async getInitialProps({ctx}) {
        const res = await fetch('https://api.tvmaze.com/shows');
        const data = await res.json();
        console.log("heloo" + data.length);
        return {
            shows: data
        }
    } 
    CartItem = ({}) => {
        return (
    
        )
    }
    
    render() {
        return (
            <div>
                <Consumer>
                    {
                        ({idList}) => <CartItem list={idList}/>
                    }
                </Consumer>
            </div>
        )
    }
}
