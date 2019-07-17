require("!style!css!sass!../src/scss/_react-magic-zoom.scss");

import React, { Component } from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import s from './style.module.css';
import { Consumer, Provider } from './../components/Context';
import MagicZoom from 'react-magic-zoom';

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

const Input = ({onClick,showId }) => {
    return (
        <input 
        type="button"
        value="Buy"
        onClick={()=> onClick({id : showId })}
        />
    )
};

export default class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.addShow = this.addShow.bind(this);
    }
    

    static async getInitialProps(ctx){
        const { id } = ctx.query
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const show = await res.json()
    
        console.log(`Fetched show: ${show.name}`)
    
        return { show }
    }

    addShow = (id) =>{
        this.context.setCart(id);
    }

    render() {
        const { name, summary, image, rating, genres, id} = this.props.show;
        return (
            <div className={s.show}> 
                <div>
                    <MagicZoom>
                    <img src={image.medium}/>
                    </MagicZoom>                
                </div>   
                <div className={s.content}>
                    <h1>{name}</h1>
                    <div>Summary :- {summary}</div>
                    <p>Rating :- {rating.average}</p>
                    <ul>
                        Genres :- {genres.map((gen,i) => <li key={'genres'+i}>{gen}</li>)}
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

