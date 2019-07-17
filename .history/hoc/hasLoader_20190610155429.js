import React, { Component } from 'react'
        
const hasLoader = WrappedComponent => props => {
    return class HasLoader extends Component {
        render() {
            if(props){
                return <h1>loading...kasps</h1>
            } 
            return <WrappedComponent/>
        }
    }
    
}
  

export default hasLoader;