import React, {PureComponent} from 'react'
import {Consumer, Provider} from './../components/Context';
import Link from 'next/link';

export default class PageItems extends PureComponent {
    render() {
        const { indexOfFirstShow, indexOfLastShow } = this.props;
        return (
            <Consumer>
                {({shows}) => {
                    this.props.showLength = () => shows.length;
                    const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
                    return (currentShows.map(show => (
                        <li key={show.id}>
                            <Link href={`/post?id=${show.id}`}>
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
