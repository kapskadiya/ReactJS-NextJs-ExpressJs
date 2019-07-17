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
//   return (         <div>           <button onClick={this.notify}>Notify
// !</button>           <ToastContainer />         </div>       );     }   }
// const home = () => (   <Layout content={content} /> ); const home = () => (
// <Blog /> );

export default class Index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          activePage: 1,
          itemsCountPerPage: 10
        };
        this.handlePageChange = this.handlePageChange.bind(this);
      }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});

      }
    render() {
        const { activePage, itemsCountPerPage } = this.state;
        return (
            <Consumer>
                {
                    ({shows}) => {
                        const indexOfLastShow = activePage * itemsCountPerPage;
                        const indexOfFirstShow = indexOfLastShow - itemsCountPerPage;
                        const currentShows = shows.slice(indexOfFirstShow,indexOfLastShow);
                        
                        const renderShows = currentShows.map(
                            show => (
                                    <li key={show.id}>
                                         <Link href={`/post?id=${show.id}`}>
                                             <img src={show.image.medium}/>
                                         </Link>
                                         <h3>{show.name}</h3>
                                     </li>
                                 ))
                        return (
                            <>
                            <ul>
                            {renderShows}
                            </ul>
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={shows.length}
                                pageRangeDisplayed={10}
                                onChange={this.handlePageChange}
                            />
                            </>
                        )
                    }
                }
            </Consumer>
            
            // <div className={s.card_display}>
            //     <h1>TV Shows</h1>
            //     <ul className={s.card}>
            //         <Consumer>
            //             {({shows}) => {
            //                 return shows.length
            //                     ? shows.map(show => (
            //                         <li key={show.id}>
            //                             <Link href={`/post?id=${show.id}`}>
            //                                 <img src={show.image.medium}/>
            //                             </Link>
            //                             <h3>{show.name}</h3>
            //                         </li>
            //                     ))
            //                     : <li>
            //                         <p>no data</p>
            //                       </li>
            //             }}
            //         </Consumer>
            //     </ul>
            // </div>
        )
    }
}
// const Page = () => <p>Hello Home page</p> export default Layout(Page);