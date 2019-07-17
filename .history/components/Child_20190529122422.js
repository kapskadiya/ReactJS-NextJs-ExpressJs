import React, { Component } from 'react'
import MyContext from "./MyContext";
import hoistNonReactStatic from "hoist-non-react-statics";


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
   return
}

export default withContext(Child);