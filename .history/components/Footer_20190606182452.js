import React, {Component} from 'react'
import './footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_view">
                    <div>
                        <p>Footer Left</p>
                    </div>
                    <div className="footer_left">
                        <p>Footer center</p>
                    </div>
                    <div>
                        <p>Footer Right</p>
                    </div>
                </div>
            </div>
        )
    }
}
