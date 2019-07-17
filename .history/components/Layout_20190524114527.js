import Header from '../components/Header'

const withLayout = Page => (
    <div>
        <Header>
            <Page />
        </Header>
    </div>
)

export default Layout;