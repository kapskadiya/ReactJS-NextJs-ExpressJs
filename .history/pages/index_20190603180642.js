import React, { Component } from 'react'
import Home from '../home'
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css';
import { Consumer } from './../components/Context';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

//  export default class App extends Component {
//     notify = () => toast("Wow so easy !");

//     render(){
//       return (
//         <div>
//           <button onClick={this.notify}>Notify !</button>
//           <ToastContainer />
//         </div>
//       );
//     }
//   }

// const home = () => (   <Layout content={content} /> ); const home = () => (
// <Blog /> );

export default class Index extends Component {

    render() {
        console.log(this.context, 'sss')
        const { shows } = this.context;
        return (
            <div className={s.card_display}>
                <h1>TV Shows</h1>
                <ul className={s.card}>
                { shows.length ? shows
                                    .map(show => (
                                        <li key={show.id}>
                                            <Link href={`/post?id=${show.id}`}>
                                                <img src={show.image.medium} />
                                            </Link>
                                            <h3>{show.name}</h3>
                                        </li>
                                    )) : <li> <p>no data</p></li>
                            }
                            }
                </ul>
            </div>
        )
    }
}
Index.contextType = Consumer;
// const Page = () => <p>Hello Home page</p> export default Layout(Page);