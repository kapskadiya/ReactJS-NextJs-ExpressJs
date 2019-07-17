const hasProps = injectedProps => WrappedComponent => {
    const HasProps = props => <WrappedComponent {...injectedProps} {...props} />
    console.log(injectedProps)
    return HasProps
}

export default hasProps;