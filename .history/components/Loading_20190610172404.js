import React, { Component } from 'react'
import s from './loading.module.css'

export default class Loading extends Component {
    render() {
        return (
            <div className={s.loader}>
                <h1>Loading</h1>
            </div>
        )
    }
}
