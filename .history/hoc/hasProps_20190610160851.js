const hasProps = injectedProps => WrappedComponent => {
    const HasProps = props => <WrappedComponent {...injectedProps} {...props} />
    return HasProps
}