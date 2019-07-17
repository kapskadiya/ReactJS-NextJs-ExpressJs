import React, { Component } from 'react'
        
const hasLoader = WrappedComponent => props => {
    
    return class HasLoader extends Component {
        render() {
            return (
                <div>
                    <h1>{props}</h1>
                </div>
            )
        }
    }
    
}
  

export default hasLoader;