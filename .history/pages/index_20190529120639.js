import React, { Component } from 'react'
import Home from '../home'
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyContext from './../components/MyContext';
import Parent from './../components/Parent';


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
    <>
    <MyContext>
            <Parent/>
    </MyContext>
      </>  
    // <>
    //     <h1>Batman TV Show</h1>
    //     <ul>
    //         {props
    //             .shows
    //             .map(show => (
    //                 <li key={show.id}>
    //                     <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
    //                         <a>{show.name}</a>
    //                     </Link>
    //                 </li>
    //             ))
    //         }
    //     </ul>
    // </>
)

// Index.getInitialProps = async function () {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//     console.log("heloo" + data.length);
//     return {
//         shows: data.map(entry => entry.show)
//     }
// }

export default Index;
// const Page = () => <p>Hello Home page</p> export default Layout(Page);