import React, { Component } from 'react'
import { Provider, Consumer } from './Context'
import Parent from './Parent';

const Input = ({ value, onChange }) => (
    <input
    value={value}
    onChange={event => onChange({ value: event.target.value })}
    style={{ width: "100%", fontSize: "1.5em" }}
  />
  );
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
                        <Input value={count} onChange={getData}/>
                        <p>counter {count} </p> 
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