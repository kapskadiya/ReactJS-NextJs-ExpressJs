import React, { Component } from 'react'
        
const hasLoader = WrappedComponent => {
        class HasLoader extends Component {
            render() {
                return (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )
            }
        }
        return HasLoader
    }


export default hasLoader;