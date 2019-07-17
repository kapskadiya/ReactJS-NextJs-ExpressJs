import React, {Component} from 'react'
import {Consumer} from './Context'
import Link from 'next/link'

export default class Header extends Component {
    static contextType = Consumer;

    constructor(props) {
        super(props);
        this.state = {
            "contextValue": ""
        }
    }

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
                            <Link href={`/cart?ids=${this.context.idList}`}>
                                <button>Cart
                                    <span className="cart-counter">{this.context.idList.length}</span>
                                </button>
                            </Link>
                        
                    </div>
                </div>
                <div className="header-child">
                    <h1>SHOWCASE</h1>
                </div>
                <div className="header-corner">
                    <div className="header-child">
                        <input
                            type="text"
                            onChange={(e) => {
                            this.state.contextValue = e.target.value;
                            console.log(this.state.contextValue, 'ssss');
                            this.context.changeGalleryFromSearch(e.target.value);
                        }}
                            placeholder="Search here"/>

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

