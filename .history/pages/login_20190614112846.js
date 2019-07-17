import React from 'react'
import Router from 'next/router'

export default class Login extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
             uname: '',
             pass: ''
        }
        this.onUnameChange = this.onUnameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    
    componentDidMount() {
        this.setState({
            uname: localStorage.getItem('uname') || ''
        });
    }
    

    onUnameChange = (e) => {
        this.setState({
            uname:e.target.value
        });
        localStorage.setItem('uname',e.target.value);
    }

    onPasswordChange = (e) => {
        this.setState({
            pass:e.target.value
        });
    }
 
    onSubmit = (e) => {
        e.preventDefault();
        console.log("aaaaa")
        Router.push(`/index?uname=${this.state.uname}`);
        console.log("bbbbb")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td>username</td>
                            <td><input type="text" value={this.state.uname} onChange={this.onUnameChange} placeholder="username"/></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="text" value={this.state.pass} onChange={this.onPasswordChange} placeholder="password"/></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Submit"/></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
