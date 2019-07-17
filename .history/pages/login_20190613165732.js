import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <table align="centre">
                        <tr>
                            <td>username</td>
                            <td><input type="text" placeholder="username"/></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" placeholder="password"/></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}
