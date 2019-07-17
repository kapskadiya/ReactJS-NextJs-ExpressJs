import Header from '../components/Header'

// const Layout = props => (
//     <div>
//         <Header>
//         {props.content}
//         </Header>
//     </div>
// )

const Layout = props => (
    <div>
        <Header>
        {props.children}
        </Header>
    </div>
)


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