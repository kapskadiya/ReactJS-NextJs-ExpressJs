import Header from '../components/Header'

const Layout = Page => (
    <div>
        <Header>
            <Page />
        </Header>
    </div>
)

export default withLayout;