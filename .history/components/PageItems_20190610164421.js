import React, {PureComponent} from 'react'
import {Consumer} from './../components/Context';
import Link from 'next/link';
import hasLoader from './../hoc/hasLoader.js'
import Loading from './../components/Loading'


class PageItems extends PureComponent {

    setIds = (length) => {
        this.props.callbackShowLength(length);
    }
    render() {
        const {indexOfFirstShow, indexOfLastShow} = this.props;
        return (
            <Consumer>
                {({shows}) => {
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
                }}
            </Consumer>
        )
    }
}
export default hasLoader(PageItems)(Loading)