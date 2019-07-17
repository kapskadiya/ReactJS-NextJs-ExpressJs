import React, { Component } from 'react'
import { Consumer, Provider } from './../components/Context'

const CartItem = ({}) => {
    return (

    )
}

export default class Cart extends Component {
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
