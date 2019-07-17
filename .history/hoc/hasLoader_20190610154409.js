import React, { Component } from 'react'
        
const hasLoader = WrappedComponent => loading => {
    return class HasLoader extends Component {
        render() {
            if(loading){
                return <h1>loading...</h1>
            } 
            return <WrappedComponent/>
        }
    }
    
}
  

export default hasLoader;