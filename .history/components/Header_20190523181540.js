import React, { Component } from 'react'

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
                <div>
                    WATCHMAXX
                </div>
                <div className="header-corner">
                    <div className="header-child">
                        Search
                    </div>
                    <div className="header-child">
                        My Bag
                    </div>
                </div>
            </div>
        )
    }
}
