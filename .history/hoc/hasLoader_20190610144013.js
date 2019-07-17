import React, { PureComponent } from 'react'
    
 
const hasLoader = WrappedComponent => {
    return class HasLoader extends PureComponent {
        render() {
            if(this.props.loading){
                return (<h1>Loading...</h1>);    
            }
            return (<WrappedComponent {...props}/>);
        }
    }
}

export default hasLoader;