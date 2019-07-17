import React, {Component} from 'react'
import Header from '../components/Header'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import {Consumer} from './Context';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="view">
                <ToastContainer
                    position="bottom-right"
                />
                    <Header/> 
                    {this.props.children}
                    <Footer/>
                </div>
            </div>
        )
    }
}

// export default class Layout extends Component {    notify(){ toast("Easy
// Psy!!");    }     render() {         return (             <div> <button
// onClick={this.notify}>Notify !</button> <TosatContainer/>     <Header>
// {this.props.children}                 </Header> </div>         )    } } const
// Layout = props => {     return(     <div>   <Header>   <button
// onClick={this.notify}>Notify !</button> <TosatContainer/> {props.children}
//   </Header>     </div> )} const Layout = Page => { return () => ( <div>
//   <Header>      <Page /> </Header>     </div> )}