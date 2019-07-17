import React, { Component } from 'react'
import Context from './Context'
import Link from 'next/link'

export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="header-corner">
                    <div className="header-child">
                        LIVE CHAT
                    </div>
                    <div className="header-child">
                        +91 99250 35404
                    </div> 
                </div>
                <div className="header-child">
                    WATCHMAXX
                </div>
                <div className="header-corner">
                    <div className="header-child">
                        <input type="text" placeholder="Search here" />
                    </div>
                    <div className="header-child">
                    <Link href="/about">
                        <a title="My About">My Bag</a>
                    </Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}
