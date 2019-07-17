import React, { Component } from 'react'
import Header from '../components/Header'
import { TosatContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// const Layout = props => (
//     <div>
//         <Header>
//         {props.content}
//         </Header>
//     </div>
// )

export default class Layout extends Component {
   
    render() {
        const notify = () => toast("Esy psy!");
        return (
            <div>
        <button onClick={this.notify}>Notify !</button>
        <TosatContainer/>   
        <Header>
        {props.children}
        </Header>   
            </div>
        )
    }
}

// const Layout = props => {
//     return(
//     <div>
//         <Header>
//         <button onClick={this.notify}>Notify !</button>
//         <TosatContainer/>   
//         {props.children}
//         </Header>
//     </div>
// )}



// const Layout = Page => {
//     return () => (
//     <div>
//         <Header>
//             <Page />
//         </Header>
//     </div>
// )}

// export default Layout;