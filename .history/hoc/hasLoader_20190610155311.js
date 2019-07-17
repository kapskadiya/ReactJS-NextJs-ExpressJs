import React, { Component } from 'react'
        
const hasLoader = WrappedComponent => props => {
    return class HasLoader extends Component {
        render() {
            if(props.loading){
                return <h1>loading...</h1>
            } 
            return <WrappedComponent/>
        }
    }
    
}
  

export default hasLoader;