import React, { Component } from 'react'
import MyContext from "./MyContext";

class Child extends Component {

    constructor(props) {
      super(props);
      this.state = {        
        ReturnMessage:""
      };
    }

    ClearData(e){
        const val = e.target.value;
        this.setState({
           ReturnMessage:val
        });
        this.props.context.updateValue('ReturnMessage', val);
    }

    render() {
        return (
           <React.Fragment>
             <p>{this.props.context.state.Message}</p>}
             <input onChange={this.ClearData} />
           </React.Fragment>
       )
    }
}

const withContext = (Component) => {
   return (props) => {
       <MyContext.Consumer>    
            {(context) => {
               return <Component {...props} context={context} />
            }}
       </MyContext.Consumer>
   }
}

export default withContext(Child);