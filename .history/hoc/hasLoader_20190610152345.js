import React, { Component } from 'react'
        
const hasLoader = WrappedComponent => {
        return class HasLoader extends Component {
            render() {
                return (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )
            }
        }
    }


export default hasLoader;