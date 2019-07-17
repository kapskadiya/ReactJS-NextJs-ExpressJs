import React, { Component } from 'react'
import { Consumer } from './Context'
import Link from 'next/link'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contextValue : ""
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
                        <Consumer>
                            {({ idList }) =>
                                <Link href={`/cart?ids=${idList}`}>
                                    <button>Cart <span className="cart-counter">{idList.length}</span></button>
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
                        <form onSubmit={this.context.changeGalleryFromSearch(this.state.contextValue) }>
                            <input type="text" onChange={(e) => { this.state.contextValue = e.target.value }} placeholder="Search here" />
                        </form>
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