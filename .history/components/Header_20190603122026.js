import React, {Component} from 'react'
import { Consumer } from './Context'
import Link from 'next/link'

export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="header-corner">
                    <div className="header-child">
                        <Link href="/">
                            <button>Home</button>
                        </Link>
                    </div>
                    <div className="header-child">
                        <Consumer>
                            {({state})=> 
                                <Link href={`/cart?ids=${state.idList}`}>
                                    <button>Cart <span className="cart-counter">{state.idList.length}</span></button>
                                </Link>
                            }
                        </Consumer>
                    </div>
                </div>
                <div className="header-child">
                    <h1>SHOWCASE</h1>
                </div>
                <div className="header-corner">
                    <div className="header-child">
                        <input type="text" placeholder="Search here"/>
                    </div>
                    <div className="header-child">
                        <Link href="/about">
                            <button>About</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}