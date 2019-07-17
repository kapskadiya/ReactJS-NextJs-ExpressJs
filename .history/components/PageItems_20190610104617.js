import React, {PureComponent} from 'react'
import { Consumer } from './../components/Context';
import Link from 'next/link';

export default class PageItems extends PureComponent {
    
    setIds = (showLength, length) => {
        return showLength(length)
    }
    render() {
        const { indexOfFirstShow, indexOfLastShow } = this.props;
        return (
            <Consumer>
                {({shows}) => {
                    this.setIds(this.props.showLength, shows.length);
                    const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
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
