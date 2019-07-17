import React, { Component } from 'react'
import { withRouter } from 'next/router';
import s from './style.module.css';
import { Consumer } from '../components/Context';
import ReactImageZoom from 'react-image-zoom';

// const Post = withRouter( props => (     <Layout>
// <h1>{props.router.query.title}</h1>     </Layout> )) const Post = withRouter(
//     props => (         <Layout>             <Content/>         </Layout>
// ) )

export default class Show extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedList : []
        }
        this.addShow = this
            .addShow
            .bind(this);
    }

    static async getInitialProps(ctx) {
        console.log("ctx in show............",ctx)
        const { id } = ctx.query
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const show = await res.json()
        return { show }
    }

    componentDidMount() {
        this.context.isDuplicate= false;
            
    }
    

    addShow = (id) => {

        if(!(this.state.selectedList.indexOf(id) > -1)){
            this.context.setCart(id);
            this.setState({
                selectedList : [...this.state.selectedList,id]
            })
        }
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
                        <button type="button" onClick={() => this.addShow(id)} disabled={this.state.disable}>Buy</button>
                    </div>
                </div>
            </div>
        )
    }
}
Show.contextType = Consumer;
