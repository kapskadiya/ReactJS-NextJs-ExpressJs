import React, { Component } from 'react'
        
const hasLoader = props => WrappedComponent => {
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