import React, {Component} from 'react'
import {Consumer} from './Context'
import Link from 'next/link'
import {toast} from 'react-toastify';
import dynamic from 'next/dynamic';
import s from './header.module.css';
import tinytime from 'babel-plugin-tinytime'

const Popup = dynamic(() => import ('./Popup'))

export default class Header extends Component {

    customToastId = 123;

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            themeStyle: {
                background: "#8A0651"
            }
        }
        this.notifyContactus = this
            .notifyContactus
            .bind(this);
        this.themeChanger = this
            .themeChanger
            .bind(this);
    }

    notifyContactus = () => {
        if (!toast.isActive(this.customToastId)) {
            toast.info(
                <Popup/>, {
                toastId: this.customToastId,
                position: "bottom-right",
                autoClose: false,
                closeOnClick: false
            })
        }
    };

    themeChanger = () => {
        if (this.state.themeStyle.background === "#8A0651") {
            this.setState({
                themeStyle: {
                    background: "gray"
                }
            })
            this.context
        } else {
            this.setState({
                themeStyle: {
                    background: "#8A0651"
                }
            })
        }
    }

    render() {
        
        return (
            <div className={s.header}>
                <div className={s.info}>
                    <div className={s.wrapper}>
                        <div className={s.contact}>
                            <ul>
                                <li>
                                    <i class="fa fa-phone"></i>
                                    <a href="#">+91 99250 35402</a>
                                    {()=><div>{tinytime('{H}:{mm}').render(this.state.date)}</div>}
                                </li>
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    <a href="#">Ahmedabad, Gujarat, India</a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.social_media}>
                            <ul>
                                <li>
                                    <a href="">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa fa-google"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa fa-pinterest-p"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={s.nav} style={this.state.themeStyle}>

                    <div className={s.header_corner}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <button>Home</button>
                                </Link>
                            </li>
                            <li>
                                <Consumer>
                                    {({idList}) => <Link href={`/cart?ids=${idList}`}>
                                        <button>Cart
                                            <span className={s.cart_counter}>{idList.length}</span>
                                        </button>
                                    </Link>}
                                </Consumer>
                            </li>
                        </ul>
                        <div className={s.header_child}>
                            <Consumer>
                                {({changeGalleryFromSearch}) => <input
                                    type="text"
                                    onChange={(e) => {
                                    changeGalleryFromSearch(e.target.value);
                                }}
                                    placeholder="Search"/>}
                            </Consumer>
                        </div>
                    </div>
                    <div className={s.header_child}>
                        <h1>SHOWCASE</h1>
                    </div>
                    <ul>
                        <li>
                            <Consumer>
                                {({changeTheme, theme}) => <button onClick={() => changeTheme(theme.themeId)}>Theme</button>}
                            </Consumer>
                        </li>
                        <li>
                            <Link href="/about">
                                <button>Test</button>
                            </Link>
                        </li>
                        <li>
                            <button onClick={this.notifyContactus}>Contact Us</button>
                        </li>
                    </ul>`
                </div>
            </div>
        )
    }
}