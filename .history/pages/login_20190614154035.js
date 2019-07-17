import React from 'react'
import Router from 'next/router'
import s from './login.module.css'

export default class Login extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            uname: '',
            pass: ''
        }
        this.onUnameChange = this
            .onUnameChange
            .bind(this);
        this.onPasswordChange = this
            .onPasswordChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('uname')){
            const uname = localStorage.getItem('uname');
            alert(`${uname} is logged in.`)
            Router.push(`/index?uname=${uname}`)
        }
        this.setState({
            uname: localStorage.getItem('uname') || ''
        });
    }

    onUnameChange = (e) => {
        this.setState({uname: e.target.value});
        localStorage.setItem('uname', e.target.value);
    }

    onPasswordChange = (e) => {
        this.setState({pass: e.target.value});
    }

    onSubmit = async(e) => {
        e.preventDefault();
        console.log("aaaaa")
        Router.replace(`/index?uname=${this.state.uname}`);
        console.log("bbbbb")
    }

    render() {
        return (
            <div className={s.login_module}>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>username</td>
                                <td><input
                                    type="text"
                                    value={this.state.uname}
                                    onChange={this.onUnameChange}
                                    placeholder="username"/></td>
                            </tr>
                            <tr>
                                <td>password</td>
                                <td><input
                                    type="text"
                                    value={this.state.pass}
                                    onChange={this.onPasswordChange}
                                    placeholder="password"/></td>
                            </tr>
                            <tr>
                                <td colspan="2"><input type="submit" value="Login"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
