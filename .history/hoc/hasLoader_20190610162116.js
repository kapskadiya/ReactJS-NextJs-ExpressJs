import hasProps from "./hasProps";
import branch from "./branch";

const hasLoader = WrappedComponent => {
    const HasLoader = props => branch(
        props.loading,
        hasProps({message: props.loadingMessage})(Loading),
        WrappedComponent
    )(props)

    return HasLoader
}

export default hasLoader;