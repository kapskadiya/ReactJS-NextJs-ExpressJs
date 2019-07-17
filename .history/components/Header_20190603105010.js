import React, {Component} from 'react'
import { Consumer } from './Context'
import Link from 'next/link'

export default class Header extends Component {
    constructor(props, context) {
        super(props)
        
        this.context = context;
        }
    

    render() {
        console.log("header context",this.context)
        return (
            <div className="header">
                <div className="header-corner">
                    <div className="header-child">
                        <Link href="/">
                            <button>Home</button>
                        </Link>
                    </div>
                    <div className="header-child">
                         <Link href={`/cart?ids=${this.context}`}>
                            <button>Cart <span className="cart-counter">{this.context}</span></button>
                        </Link>
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
Header.contextType = Consumer;