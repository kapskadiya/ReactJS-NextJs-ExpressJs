import React, { Component } from 'react'
import { Consumer } from './Context'
import Link from 'next/link'
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';

const Popup = dynamic(() => import('./Popup'))

export default class Header extends Component {

    customToastId = 123;

    constructor(props) {
        super(props);
        this.state = {
            themeStyle:{
                background: "black"
            }
        }
        this.notifyContactus = this.notifyContactus.bind(this);
        this.themeChanger = this.themeChanger.bind(this);
    }

    notifyContactus = () => {
        if (!toast.isActive(this.customToastId)) {
            toast.info(<Popup />, {
                toastId: this.customToastId,
                position: "bottom-right",
                autoClose: false,
                closeOnClick: false
            })
        }
    };

    themeChanger = () => {
        this.setState({
            themeChanger:{
                background: "green",
                fontSize: "2em"
            }
        })
        console.log("themechanger", this.state.themeStyle.background)
    }


    render() {
        return (
            <div className="header">
            <div style={this.state.themeStyle}>
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
                                    <button>Cart
                                    <span className="cart-counter">{idList.length}</span>
                                    </button>
                                </Link>}
                        </Consumer>
                    </div>
                </div>
                <div className="header-child">
                    <h1>SHOWCASE</h1>
                </div>
                <div className="header-corner">
                    <div className="header-child">
                        <Consumer>
                            {({ changeGalleryFromSearch }) => <input
                                type="text"
                                onChange={(e) => {
                                    changeGalleryFromSearch(e.target.value);
                                }}
                                placeholder="Search here" />
                            }
                        </Consumer>
                    </div>
                    <div className="header-child">
                        <Link href="/about">
                            <button>About</button>
                        </Link>
                    </div>
                    <div className="header-child">
                        <button onClick={this.notifyContactus}>Contact Us</button>
                    </div>
                    <div className="header-child">
                        <button onClick={this.themeChanger}>Theme</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
