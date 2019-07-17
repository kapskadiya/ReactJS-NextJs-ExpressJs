import React, { Component } from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import s from './style.module.css';
import { Consumer, Provider } from './../components/Context';

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

const Input = ({value, onClick }) => {
    return (
        <input 
        type="button"
        value="Buy"
        onClick={()=> onClick({ value : value+1 })}
        />
    )
};

const Cart = ({showId, setID}) => {
    console.log(showId);
    return (
        <>
        {() => setID({id: showId})}
        </>
    )
};

export default class Post extends Component {
    static async getInitialProps(ctx){
        const { id } = ctx.query
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const show = await res.json()
    
        console.log(`Fetched show: ${show.name}`)
    
        return { show }
    }


    render() {
        const { name, summary, image, rating, genres, id} = this.props.show;
        return (
            <div className={s.show}> 
                <div>
                    <img src={image.medium} />
                </div>   
                <div className={s.content}>
                    <h1>{name}</h1>
                    <div>Summary :- {summary}</div>
                    <p>Rating :- {rating.average}</p>
                    <ul>
                        Genres :- {genres.map(gen => <li>{gen}</li>)}
                    </ul>
                    <div>
                        <Consumer>
                            {
                                ({cartItem, setCart, showId, setShowId}) => 
                                <>
                                    <Input onClick={setCart} value={cartItem}/>
                                    <Cart showId={id} setID={setShowId}/>
                                </>
                            }
                        </Consumer>
                    </div>
                    
                </div>      
                
            </div>
        )
    }
}


