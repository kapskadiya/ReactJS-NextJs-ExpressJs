import React, {Component} from 'react'
import Home from '../home'
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css';
import {Consumer, Provider} from './../components/Context';
import Pagination from "react-js-pagination";

// minified version is also included import
// 'react-toastify/dist/ReactToastify.min.css';  export default class App
// extends Component {     notify = () => toast("Wow so easy !");     render(){
// return (         <div>           <button onClick={this.notify}>Notify
// !</button>           <ToastContainer />         </div>       );     }   }
// const home = () => (   <Layout content={content} /> ); const home = () => (
// <Blog /> );

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 30
        };
        this.handlePageChange = this
            .handlePageChange
            .bind(this);
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});

    }
    render() {
        const {activePage, itemsCountPerPage} = this.state;
        const indexOfLastShow = activePage * itemsCountPerPage;
        const indexOfFirstShow = indexOfLastShow - itemsCountPerPage;

        return (
            <Consumer>
                {({shows}) => {
                    const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
                    const renderShows = currentShows.map(show => (
                        <li key={show.id}>
                            <Link href={`/post?id=${show.id}`}>
                                <img src={show.image.medium}/>
                            </Link>
                            <h3>{show.name}</h3>
                        </li>
                    ))
                    return (
                        <div className={s.card_display}>
                            <h1>TV Shows</h1>
                            <ul className={s.card}>
                                {renderShows}
                            </ul>
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={itemsCountPerPage}
                                totalItemsCount={shows.length}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange}/>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
// const Page = () => <p>Hello Home page</p> export default Layout(Page);