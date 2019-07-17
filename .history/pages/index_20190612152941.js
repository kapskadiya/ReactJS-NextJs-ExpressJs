import React, {Component} from 'react'
import s from './style.module.css';
import Pagination from "react-js-pagination";
import PageItems from './../components/PageItems';
import ScrollToTopControlller from './../components/ScrollToTopControlller'


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 20,
            showLength: null
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
                <video id={s.background_video} loop autoPlay>
                    <source src="./../static/video.mp4" type="video/mp4"></source>
                </video>
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
                        : <p></p>
                   }
                </span>
                <ScrollToTopControlller scrollStepInPx="50" delayInMs="20"/>
            </div>
        )

    }
}

export default Index;