import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <table>
                        <tr>
                            <td>username</td>
                            <td><input type="text" onChange placeholder="username"/></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" placeholder="password"/></td>
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
