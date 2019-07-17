import React, { Component } from 'react'
import s from './footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <div className={s.footer}>
                <div>
                    <p>Footer Left</p>
                </div>
                <div>
                    <p>Footer center</p>
                </div>
                <div>
                    <p>Footer Right</p>
                </div>
                
            </div>
        )
    }
}
