import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from './Footer';
import Loading from './Loading';

export default class Layout extends Component {
    render() {
        return (
            <>
            <Loading/>
            <div className="container">
                
                <div className="view">
                    
                    <Header/> 
                    {this.props.children}
                    <Footer/>
                </div>
            </div>
            </>
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