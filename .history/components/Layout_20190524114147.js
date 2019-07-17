import Header from '../components/Header'

const Layout = props => (
    <div>
        <Header>
        {props.children}
        </Header>
    </div>
)

export default Layout;