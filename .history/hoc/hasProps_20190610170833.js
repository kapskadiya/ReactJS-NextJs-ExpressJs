const hasProps = injectedProps => WrappedComponent => {
    const HasProps = props => <WrappedComponent {...injectedProps} {...props} />
    console.log(props)
    return HasProps
}

export default hasProps;