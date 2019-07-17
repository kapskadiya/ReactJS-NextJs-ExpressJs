import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from './Footer';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="view">
                    <Header/>
                    <div className="main"> 
                    {this.props.children}
                    </div>
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