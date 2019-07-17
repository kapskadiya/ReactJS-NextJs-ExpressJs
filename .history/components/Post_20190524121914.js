import { withRouter } from 'next/router';
import Layout from './Layout';

const Content = props => (
    <div>
        <h1>{props.router.query.title}</h1>
    </div>
)

const Post = withRouter(
    props => (
        <Layout>
            <Content/>
        </Layout>
    )
)