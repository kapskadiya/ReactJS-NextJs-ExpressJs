import Header from '../components/Header'

const Layout = Page => {
    return () => (
    <div>
        <Header>
            <Page />
        </Header>
    </div>
)}

export default Layout;