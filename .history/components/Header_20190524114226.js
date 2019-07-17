import React, { Component } from 'react'
import Context from './Context'
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
                        {this.props.children}
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
                        <button>About</button>
                    </Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}
