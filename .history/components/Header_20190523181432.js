import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-corner">
                    <div>
                        LIVE CHAT
                    </div>
                    <div>
                        +91 99250 35404
                    </div> 
                </div>
                <div>
                    WATCHMAXX
                </div>
                <div className="header-corner">
                    <div>
                        Search
                    </div>
                    <div>
                        My Bag
                    </div>
                </div>
            </div>
        )
    }
}
