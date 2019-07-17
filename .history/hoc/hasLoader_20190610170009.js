
const hasLoader = WrappedComponent => Data => {
    const HasLoader = props => {
        const {loading, Loader} = Data;
        if(loading){
            return <Loader />
        } else {
            return <WrappedComponent {...props}/>
        }
    }

    return HasLoader
}

export default hasLoader;