import React, {Component} from 'react'
import Context from './Context'
import Link from 'next/link'
import ContextProvider from './Context'

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
                        LIVE CHAT
                    </div>
                </div>
                <div className="header-child">
                    SHOWCASE
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
