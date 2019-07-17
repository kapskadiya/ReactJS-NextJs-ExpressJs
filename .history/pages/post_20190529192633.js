import React, { Component } from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/Layout';

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
        const { name, summary, image, rating, genres} = this.props.show;
        return (
            <div>          
                <h1>{name}</h1>
                <div>{summary}</div>
                <img src={image.medium} />
                <p>{rating.average}</p>
                {genres.map(gen => <p>{gen}</p>)}
            </div>
        )
    }
}


