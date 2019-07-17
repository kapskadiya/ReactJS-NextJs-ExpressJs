import React, { Component } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { withRouter } from 'next/router'
import Counter from '../components/Counter';
import Parent from '../components/Parent';

// export default class About extends Component {
//     render() {
//         return (
//             <div>
//                 <Layout content={<p>This is about page.</p>} />
                
//             </div>
//         )
//     }
// }
class About extends Component {
    render() {
        console.log("about",this.context)
        return (
            <div>
                <Counter/>
                <p>This is about page.</p>
                
            </div>
        )
    }
}

// const Page = () => <p>This is about page</p>

 export default About;