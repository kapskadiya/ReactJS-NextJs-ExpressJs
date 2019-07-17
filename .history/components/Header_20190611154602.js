import React, { Component } from 'react'
import { Consumer } from './Context'
import Link from 'next/link'
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';
import s from './header.module.css'

const Popup = dynamic(() => import('./Popup'))

export default class Header extends Component {

    customToastId = 123;

    constructor(props) {
        super(props);
        this.state = {
            themeStyle:{
                background: "#8A0651"
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
        if(this.state.themeStyle.background === "#8A0651"){
            this.setState({
                themeStyle:{
                    background: "gray"
                }
            })
            this.context
        } else {
            this.setState({
                themeStyle:{
                    background: "#8A0651"
                }
            })
        }
    }


    render() {
        return (
            <div className={s.header} style={this.state.themeStyle}>
                <div className={s.header_corner}>
                    <div className={s.header_child}>
                        <Link href="/">
                            <button>Home</button>
                        </Link>
                    </div>
                    <div className={s.header_child}>
                        <Consumer>
                            {({ idList }) =>
                                <Link href={`/cart?ids=${idList}`}>
                                    <button>Cart
                                    <span className={s.cart_counter}>{idList.length}</span>
                                    </button>
                                </Link>}
                        </Consumer>
                    </div>
                    <div className={s.header_child}>
                        <Consumer>
                            {({ changeGalleryFromSearch }) => <input
                                type="text"
                                onChange={(e) => {
                                    changeGalleryFromSearch(e.target.value);
                                }}
                                placeholder="Search" />
                            }
                        </Consumer>
                    </div>
                </div>
                <div className={s.header_child}>
                    <h1>SHOWCASE</h1>
                </div>
                <div className={s.header-corner}>
                    <div className={s.header_child}>
                        <Consumer>
                            {   
                                ({changeTheme, theme}) => <button onClick={() => changeTheme(theme.themeId)}>Theme</button> 
                            }
                        </Consumer>    
                    </div>  
                    <div className={s.header_child}>
                        <Link href="/about">
                            <button>Test</button>
                        </Link>
                    </div>
                    <div className={s.header_child}>
                        <button onClick={this.notifyContactus}>Contact Us</button>
                    </div> 
                </div>`
            </div>
        )
    }
}
