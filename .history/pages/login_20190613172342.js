import React from 'react'

const useSessionStorage = localStorageKey => {
    const [value, setValue] = React.useState(
        sessionStorage.getItem(localStorageKey) || ''
    );

    React.useEffect(() => {
        sessionStorage.setItem(localStorageKey, value)
    },[value]);

    return [value, setValue];
};

const login = () => {
    const [value, setValue] = useSessionStorage('username');
        
    const onUnameChange = (e) => setValue(e.target.value)

    const onPasswordChange = () => {

    }

    const onSubmit = () => {

    }

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <table>
                        <tr>
                            <td>username</td>
                            <td><input type="text" value={value} onChange={onUnameChange} placeholder="username"/></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="password" onChange={onPasswordChange} placeholder="password"/></td>
                        </tr>
                        <tr>
                            <td><input type="button" value="Submit"/></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    
}
export default login;
// export default class Login extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
             
//         }
//         this.onUnameChange = this.onUnameChange.bind(this);
//         this.onPasswordChange = this.onPasswordChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }
    
    
//     onUnameChange = (e) => setValue(e.target.value)

//     onPasswordChange = () => {

//     }

//     onSubmit = () => {

//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.onSubmit}>
//                     <table>
//                         <tr>
//                             <td>username</td>
//                             <td><input type="text" onChange={this.onUnameChange} placeholder="username"/></td>
//                         </tr>
//                         <tr>
//                             <td>password</td>
//                             <td><input type="password" onChange={this.onPasswordChange} placeholder="password"/></td>
//                         </tr>
//                         <tr>
//                             <td><input type="button" value="Submit"/></td>
//                         </tr>
//                     </table>
//                 </form>
//             </div>
//         )
//     }
// }
