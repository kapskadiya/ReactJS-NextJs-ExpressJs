import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.onUnameChange = this.onUnameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onUnameChange = () => {

    }

    onPasswordChange = () => {

    }

    onSubmit = () => {

    }

    render() {
        return (
            <div>
                <form onSubmit={}>
                    <table>
                        <tr>
                            <td>username</td>
                            <td><input type="text" onChange={} placeholder="username"/></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" onChange={} placeholder="password"/></td>
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
