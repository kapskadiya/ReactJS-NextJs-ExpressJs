import React from 'react'
import Router from 'next/router'
import l from './login.module.css'
import s from './style.module.css';


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
        Router.replace(`/index?uname=${this.state.uname}`);
    }

    render() {
        return (
            <>
            <div className={s.info}>
                    <div className={s.wrapper}>
                        <div className={s.contact}>
                            <ul>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <a href="#">+91 99250 35402</a>
                                </li>
                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    <a href="#">Ahmedabad, Gujarat, India</a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.social_media}>
                            <ul>
                                <li>
                                    <a href="">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-google"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-pinterest-p"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-dribbble"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            <div className={l.login_module}>
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
                                <td colSpan="2"><input type="submit" value="Login"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            </>
        )
    }
}
