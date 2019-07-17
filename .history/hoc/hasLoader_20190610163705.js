import hasProps from "./hasProps";
import branch from "./branch";

const hasLoader = WrappedComponent => Loading => {
    const HasLoader = props => <Loading/>

    return HasLoader
}

export default hasLoader;