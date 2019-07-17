import Home from '../home'
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

const content = <p>Hello Watchmaxx</p>

import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


// const home = () => (   <Layout content={content} /> ); const home = () => (
// <Blog /> );

// const Index = (props) => (
//     <Layout>
//         <h1>Batman TV Show</h1>
//         <ul>
//             {props
//                 .shows
//                 .map(show => (
//                     <li key={show.id}>
//                         <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//                             <a>{show.name}</a>
//                         </Link>
//                     </li>
//                 ))
//             }
//         </ul>
//     </Layout>
// )

// Index.getInitialProps = async function () {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//     console.log("heloo" + data.length);
//     return {
//         shows: data.map(entry => entry.show)
//     }
// }

//export default Index;
// const Page = () => <p>Hello Home page</p> export default Layout(Page);