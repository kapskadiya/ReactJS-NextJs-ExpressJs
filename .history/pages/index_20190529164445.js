import React, { Component } from 'react'
import Home from '../home'
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css';


const content = <p>Hello Watchmaxx</p>


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

const Index = (props) => (
    <div>
        <h1>Superman TV Show</h1>
        <ul className={s.card}>
            {props
                .shows
                .map(show => (
                    <li key={show.id}>
                        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                            <div>
                                <img src={show.image.medium}/>
                                <a>{show.name}</a>
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=superman');
    const data = await res.json();
    console.log("heloo" + data.length);
    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index;
// const Page = () => <p>Hello Home page</p> export default Layout(Page);