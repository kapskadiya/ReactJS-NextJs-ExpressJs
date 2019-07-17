import React, { Component } from 'react'
import s from './style.module.css';
import { Consumer } from '../components/Context';
import ReactImageZoom from 'react-image-zoom';
import Parser from 'html-react-parser';
import Rating from 'react-star-review';

// const Post = withRouter( props => (     <Layout>
// <h1>{props.router.query.title}</h1>     </Layout> )) const Post = withRouter(
//     props => (         <Layout>             <Content/>         </Layout>
// ) )

class Show extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
      
    }

    static async getInitialProps(ctx) {
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
        console.log(rating.average)
        const props = { width: 210, scale: 1.5, img: image.original, offset: { vertical: 10, horizontal: 50 } };
        return (
            <div className={s.show}>
                <ReactImageZoom {...props} />
                <div className={s.content}>
                    <h1>{name}</h1>
                    <div className={s.summary}>Summary :- {Parser(summary)}</div>
                    <p>Rating :- 
                        <Rating
                            size={20}
                            count={10}
                            rating={rating.average}
                            interactive={false}
                            />
                    </p>
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

export default Show;