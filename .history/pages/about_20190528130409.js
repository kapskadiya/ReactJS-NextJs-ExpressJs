import React, { Component } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { withrouter } from 'next/router'

// export default class About extends Component {
//     render() {
//         return (
//             <div>
//                 <Layout content={<p>This is about page.</p>} />
                
//             </div>
//         )
//     }
// }

export default class About extends Component {
    render() {
        return (
            <div>
                <Layout>
                <p>This is about page.</p>
                </Layout>
            </div>
        )
    }
}

// const Page = () => <p>This is about page</p>

// export default Layout(Page);