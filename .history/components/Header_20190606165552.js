import React, {Component} from 'react'
import {Consumer} from './Context'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Header extends Component {
    static contextType = Consumer;

    constructor(props) {
        super(props);
        this.state = {
            "contextValue": ""
        }
        this.notifyContactus = this.notifyContactus.bind(this);
    }

    notifyContactus =() => {
        toast.success("Hello Success......");
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
                            {({idList}) => 
                            <Link href={`/cart?ids=${idList}`}>
                                <button>Cart
                                    <span className="cart-counter">{idList.length}</span>
                                </button>
                            </Link>}
                        </Consumer>
                    </div>
                    <div className="header-child">
                            <button onClick={this.notifyContactus}>Contact Us</button>
                            <ToastContainer/>
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
