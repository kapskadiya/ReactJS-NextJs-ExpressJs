
const hasLoader = WrappedComponent => Loading => {
    const HasLoader = props => {
        console.log(props)
        return <Loading/>
    }

    return HasLoader
}

export default hasLoader;