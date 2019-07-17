import React, {Component} from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css';
import Pagination from "react-js-pagination";
import PageItems from './../components/PageItems'


// minified version is also included import
// 'react-toastify/dist/ReactToastify.min.css';  export default class App
// extends Component {     notify = () => toast("Wow so easy !");     render(){
// return (         <div>           <button onClick={this.notify}>Notify
// !</button>           <ToastContainer />         </div>       );     }   }
// const home = () => (   <Layout content={content} /> ); const home = () => (
// <Blog /> );

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 20,
            showLength: 1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.getShowLength = this.getShowLength.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});

    }

    componentDidMount() {
        this.getShowLength;
    }
    getShowLength(length){
        this.setState({
            showLength: length
        });
    }    

    
    render() {
        const {activePage, itemsCountPerPage, showLength} = this.state;
        const indexOfLastShow = activePage * itemsCountPerPage;
        const indexOfFirstShow = indexOfLastShow - itemsCountPerPage;

        return (
            <div className={s.card_display}>
                <h1>TV Shows</h1>
                <ul className={s.card}>
                    <PageItems
                        indexOfFirstShow={indexOfFirstShow}
                        indexOfLastShow={indexOfLastShow}
                        showLength={this.getShowLength}
                        />
                </ul>
                <span className={s.pagination}>
                    <Pagination
                        hideDisabled
                        prevPageText='prev'
                        nextPageText='next'
                        firstPageText='first'
                        lastPageText='last'
                        activePage={activePage}
                        itemsCountPerPage={itemsCountPerPage}
                        totalItemsCount={showLength}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                        activeLinkClass={s.active}/>
                </span>
            </div>
        )

    }
}
// const Page = () => <p>Hello Home page</p> export default Layout(Page);