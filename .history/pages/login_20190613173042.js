import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
        this.onUnameChange = this.onUnameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    
    onUnameChange = (e) => setValue(e.target.value)

    onPasswordChange = () => {

    }

    onSubmit = () => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tr>
                            <td>username</td>
                            <td><input type="text" onChange={this.onUnameChange} placeholder="username"/></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" onChange={this.onPasswordChange} placeholder="password"/></td>
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
