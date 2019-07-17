
const hasLoader = WrappedComponent => (props) => {
        if(props.loading) return <h1>Loading...</h1>
        return <WrappedComponent {...props}/>
    }


export default hasLoader;