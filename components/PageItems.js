import React, {PureComponent} from 'react'
import {Consumer} from './../components/Context';
import Link from 'next/link';
import Loading from './Loading';
import Fade from 'react-reveal/Fade'

class PageItems extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {

            this.setState({loading: false})
    } 

    setIds = (length) => {
        this.props.callbackShowLength(length);
    }
    render() {
        const {indexOfFirstShow, indexOfLastShow} = this.props;
        return (
            <Consumer>
                {({shows}) => {
                    if (this.state.loading) {
                        return <Loading/>
                    } else {
                        this.setIds(shows.length);
                        const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);
                        return (currentShows.map(show => (

                            <li key={show.id}>
                                <Link prefetch href={`/show?id=${show.id}`}>
                                    <img src={show.image.medium}/>
                                </Link>
                                <h3>{show.name}</h3>
                            </li>

                        )))
                    }
                }}
            </Consumer>
        )
    }
}
export default PageItems;