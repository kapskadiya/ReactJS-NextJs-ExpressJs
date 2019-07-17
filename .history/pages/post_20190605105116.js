import React, { Component } from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import s from './style.module.css';
import { Consumer } from './../components/Context';
import ReactImageZoom from 'react-image-zoom';

// const Post = withRouter( props => (     <Layout>
// <h1>{props.router.query.title}</h1>     </Layout> )) const Post = withRouter(
//     props => (         <Layout>             <Content/>         </Layout>
// ) )

export default class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.addShow = this
            .addShow
            .bind(this);
    }

    static async getInitialProps(ctx) {
        const { id } = ctx.query
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const show = await res.json()
        return { show }
    }

    addShow = (id) => {
        this.context.setCart(id);
    }

    render() {
        const {
            name,
            summary,
            image,
            rating,
            genres,
            id
        } = this.props.show;

        const props = { width: 210, scale: 1.5, img: image.original, offset: { vertical: 10, horizontal: 50 } };
        return (
            <div className={s.show}>
                <ReactImageZoom {...props} />
                <div className={s.content}>
                    <h1>{name}</h1>
                    <div>Summary :- {summary}</div>
                    <p>Rating :- {rating.average}</p>
                    <ul>
                        Genres :- {genres.map((gen, i) => <li key={'genres' + i}>{gen}</li>)}
                    </ul>
                    <div>
                        <button onClick={() => this.addShow(id)}>Buy</button>
                    </div>
                </div>
            </div>
        )
    }
}
Post.contextType = Consumer;
