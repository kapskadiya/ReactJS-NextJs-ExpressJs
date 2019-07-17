import Header from '../components/Header'

const Layout = props => (
    <div>
        <Header/>
        {this.props.children}
    </div>
)

export default Layout;