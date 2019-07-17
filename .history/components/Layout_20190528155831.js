import React, { Component } from 'react'
import Header from '../components/Header'
import { TosatContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import { ContextConsumer } from './Context'

const Layout = props => (
    <div className="container">
        <Header />
        {props.children}
        <ContextConsumer>
            { value => <p>count {value.count}</p> }
        </ContextConsumer>
        <Footer/>
    </div>
)

// export default class Layout extends Component {
//    notify(){
//        toast("Easy Psy!!");
//    }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.notify}>Notify !</button>
//                 <TosatContainer/>
//                 <Header>
//                     {this.props.children}
//                 </Header>   
//             </div>
//         )
//     }
// }

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

export default Layout;