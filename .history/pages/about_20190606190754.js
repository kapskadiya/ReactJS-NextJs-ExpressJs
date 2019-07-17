import React, { Component } from 'react';
import Counter from '../components/Counter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
            <div className="about">
                <Counter/>
                <p>This is about page.</p>
                <button onClick={() => toast("jnsfjkdfkjdsf")}>Clickccc</button>
                <ToastContainer/>
            </div>
        )
    }
}

// const Page = () => <p>This is about page</p>

 export default About;