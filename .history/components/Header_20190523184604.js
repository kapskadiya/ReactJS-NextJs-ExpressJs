import React, { Component } from 'react'
import Context from './Context'

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
                    <Context.Consumer>
                    {c => {
                        return (
                    <div className="header-child">
                        My Bag {c.state.username}
                    </div>); 
                    } 
                    }
                    </Context.Consumer>
                </div>
            </div>
        )
    }
}
