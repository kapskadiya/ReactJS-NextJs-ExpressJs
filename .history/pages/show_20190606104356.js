import React, { Component } from 'react'
import { withRouter } from 'next/router';
import s from './style.module.css';
import { Consumer } from '../components/Context';
import ReactImageZoom from 'react-image-zoom';

// const Post = withRouter( props => (     <Layout>
// <h1>{props.router.query.title}</h1>     </Layout> )) const Post = withRouter(
//     props => (         <Layout>             <Content/>         </Layout>
// ) )

class Show extends Component {
    constructor(props,router) {
        super(props)
        console.log("qqqqqqqqq............",router)
        this.state = {
        }
      
    }

    static async getInitialProps(ctx) {
            let arr = ctx.asPath.split("/");
            console.log("sssssqqqqqq",arr[1]);
    
        console.log("ctx in show............",ctx)
        const { id } = ctx.query
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const show = await res.json()
        return {show}
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
                    <Consumer>
                        {
                            ({setCart, idList}) => {
                                if (!(idList.indexOf(id) > -1)){
                                    return <button type="button" onClick={() => setCart(id)}>Buy</button>
                                } else {
                                    return (
                                        <>
                                            <button type="button" disabled>Buy</button>
                                            <p>you have selected.</p>
                                        </>
                                        )
                                }
                                
                            }
                        }
                    </Consumer>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Show);