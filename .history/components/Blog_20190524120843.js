import React, { Component } from 'react'
import Link from 'next/link'

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default class Blog extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
