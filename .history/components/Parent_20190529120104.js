import React, { Component } from 'react'
import MyContext from "./MyContext.js";
import Child from "./Child.js";

class Parent extends Component {

    constructor(props) {
      super(props);
      this.state = {
        Message: "Welcome React",
        ReturnMessage:""
      };
    }

    updateValue = (key, val) => {
       this.setState({[key]: val});
    }
    render() {
        return (
           <MyContext.Provider value={{state: this.state, updateValue: this.updateValue}}>      
              <Child /> 
           </MyContext.Provider>
       )
    }
}