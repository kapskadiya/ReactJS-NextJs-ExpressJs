import React, { Component } from 'react'
import s from './style.module.css';
import { Consumer, Context } from '../components/Context';
import ReactImageZoom from 'react-image-zoom';
import Parser from 'html-react-parser';
import Rating from 'react-star-review';
import Loading from '../components/Loading';
import Fade from 'react-reveal/Fade'
import { withRouter } from 'next/router'

// const Post = withRouter( props => (     <Layout>
// <h1>{props.router.query.title}</h1>     </Layout> )) const Post = withRouter(
//     props => (         <Layout>             <Content/>         </Layout>
// ) )

class Show extends Component {
    static contextType = Context;
    constructor(props) {
        super(props)

        this.state = {
            loading : true,
            show: []
        }
      
    }
    
    componentWillMount() {
            const { shows } = this.context, { id } = this.props.router.query;
            const show = shows.filter(show => show.id == id);
            this.setState({
                loading: false,
                show: show
            });
    }
    
    render() {
        console.log(this.state.show);
        const {
            name,
            summary,
            image,
            rating,
            genres,
            id
        } = this.state.show[0];
        const props = { width: 210, scale: 1.5, img: image.original, offset: { vertical: 10, horizontal: 50 } };
        if(this.state.loading){
            return <Loading/>
        } 
        return (
            <div className={s.show}>
                <ReactImageZoom {...props} />
                <div className={s.content}>
                    <h1>{name}</h1>
                    <div className={s.summary}>Summary :- {Parser(summary)}</div>
                    <div className={s.rating}>Rating :- 
                        <Rating
                            size={20}
                            count={10}
                            rating={rating.average}
                            interactive={false}
                            />
                    </div>
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
                                            <Fade bottom>
                                            <p>you have selected.</p>
                                            </Fade>
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