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
            value: localStorage.getItem('uname') || ''
        });
    }
    

    onUnameChange = (e) => {
        this.state.setState({
            uname:e.target.value
        });
        localStorage.setItem('uname',e.target.value);
    }

    onPasswordChange = () => {
        this.state.setState({
            pass:e.target.value
        });
    }

    onSubmit = (e) => {

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
