import React, {PureComponent} from 'react'
import {Consumer} from './../components/Context';
import Link from 'next/link';
import hasLoader from './../hoc/hasLoader.js'
import Loading from './../components/Loading'
import hasProps from './../hoc/hasProps.js'


const Data = (loading) =>{
    return {load: loading}
}

class PageItems extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             loading: true
        }
    }
    

    setIds = (length) => {
        this.props.callbackShowLength(length);
    }
    render() {
        const {indexOfFirstShow, indexOfLastShow} = this.props;
        return (
            <Consumer>
                {({shows}) => {
                        console.log(this.state.loading);
                        <Data loading={this.state.loading}/>
                        if(shows.length > 0) {
                            this.state.loading = false
                        } else {
                        this.setIds(shows.length);
                        const currentShows = shows.reverse().slice(indexOfFirstShow, indexOfLastShow);
                        return (currentShows.map(show => (
                            <li key={show.id}>
                                <Link prefetch as={`shows/${show.id}`} href={`/show?id=${show.id}`}>
                                    <img src={show.image.medium}/>
                                </Link>
                                <h3>{show.name}</h3>
                            </li>
                        )))
                }}}
            </Consumer>
        )
    }
}
export default hasProps(Data)(PageItems);