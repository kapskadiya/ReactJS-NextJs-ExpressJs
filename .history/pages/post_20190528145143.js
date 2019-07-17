import React, { Component } from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import { fetch } from 'isomorphic-unfetch'
// const Post = withRouter( props => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//     </Layout>
// ))

// const Post = withRouter(
//     props => (
//         <Layout>
//             <Content/>
//         </Layout>
//     )
// )

export default class Post extends Component {

    static async getInitialProps(ctx){
        const { id } = ctx.query
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const show = await res.json()
    
        console.log(`Fetched show: ${show.name}`)
    
        return { show }
    
    }

    render() {
        return (
            <>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={props.show.image.medium} />
        </>
        )
    }
}