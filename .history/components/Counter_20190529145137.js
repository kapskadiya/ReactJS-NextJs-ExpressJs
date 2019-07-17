import React, { Component } from 'react'
import { Provider, Consumer } from './Context'
import Parent from './Parent';

const Input = ({ value, onClick }) =>{
    const val = `Click Here ${value}`
    return (
    <input
    type="button"
    value={val}
    onClick={() => onClick({ value: value+1 })}
  />
  )};
class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             "count":0
        }

        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(){    
        this.setState({count :this.state.count+1});
    }
       
    render() { 
        const co = this.state.count; 
        return (
            <div>
            <Consumer>
                {
                    ({ count, getData }) => 
                        <> 
                        <input type="button" value={count} onClick={() => getData({ value: value+1 })}/>
                        </>
                }
            </Consumer>
            </div>
        )
    }

}

const withContext = (Component) => {
    return (props) => {
        <Consumer>
            {(context) => {
                <Component {...props} context={context}/>}}
        </Consumer>
    }
}

export default Counter;