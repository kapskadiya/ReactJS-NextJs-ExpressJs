import React, {Component} from 'react'
import s from './style.module.css';
import Pagination from "react-js-pagination";
import PageItems from './../components/PageItems';
import {hasLoader} from './../hoc/hasLoader'

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 20,
            showLength: null,
            loading: true
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.getShowLength = this.getShowLength.bind(this);
    }

   
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});

    }
    
    getShowLength = (length) => {
        this.setState({
            showLength: length
        });
    }    

    
    render() {
        const {activePage, itemsCountPerPage} = this.state;
        const indexOfLastShow = activePage * itemsCountPerPage;
        const indexOfFirstShow = indexOfLastShow - itemsCountPerPage;

        return (
            <div className={s.card_display}>
                <h1>TV Shows</h1>
                <ul className={s.card}>
                    <PageItems
                        indexOfFirstShow={indexOfFirstShow}
                        indexOfLastShow={indexOfLastShow}
                        callbackShowLength={this.getShowLength}
                        />
                </ul>
                <span className={s.pagination}>
                   {this.state.showLength ?  
                       <Pagination
                        hideDisabled
                        prevPageText='prev'
                        nextPageText='next'
                        firstPageText='first'
                        lastPageText='last'
                        activePage={activePage}
                        itemsCountPerPage={itemsCountPerPage}
                        totalItemsCount={this.state.showLength}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                        activeLinkClass={s.active}/>
                        : <p>hh</p>
                   }
                </span>
            </div>
        )

    }
}

export default hasLoader(Index)(this.state.loading);