import React from 'react'
import Router from 'next/router'

export default class Login extends React.Component {
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
        Router.push('/index');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tr>
                            <td>username</td>
                            <td><input type="text" value={this.state.uname} onChange={this.onUnameChange} placeholder="username"/></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" value={this.state.pass} onChange={this.onPasswordChange} placeholder="password"/></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="Submit"/></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}
