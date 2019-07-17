import Header from '../components/Header'
import { TosatContainer, toast} from 'react-toastify'

// const Layout = props => (
//     <div>
//         <Header>
//         {props.content}
//         </Header>
//     </div>
// )

const Layout = props => {
    notify = () => toast("Esy psy!");
    return(
    <div>
        <Header>
        <button onClick={this.notify}>Notify !</button>
        <TosatContainer/>
        {props.children}
        </Header>
    </div>
)}


export default Layout;

// const Layout = Page => {
//     return () => (
//     <div>
//         <Header>
//             <Page />
//         </Header>
//     </div>
// )}

// export default Layout;