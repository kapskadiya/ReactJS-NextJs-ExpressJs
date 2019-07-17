import React, { Component } from 'react'
import Link from 'next/link'
import Layout from './Layout';

const PostLink = props => (
    <li>
        <Link as={`p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default class Blog extends Component {
    render() {
        return (
           <Layout>
               <ul>
                    <PostLink title="Hello Next.js" />
                    <PostLink title="Learn Next.js is awesome" />
                    <PostLink title="Deploy apps with Zeit" />
               </ul>
           </Layout>
        )
    }
}
