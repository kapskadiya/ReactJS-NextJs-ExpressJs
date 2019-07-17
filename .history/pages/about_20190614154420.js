import React, { Component } from 'react';
import Counter from '../components/Counter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css'



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
    componentDidMount() {
        if(!(localStorage.getItem('uname'))){
            alert(`You are not LogIn.`)
            Router.push('/login');
        }
    }
  
    render() {
        console.log("about",this.context)
        return (
            <div className={s.about}>
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