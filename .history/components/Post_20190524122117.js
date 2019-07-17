import { withRouter } from 'next/router';
import Layout from './Layout';

const Content = withRouter( props => (
    <Layout>
        <h1>{props.router.query.title}</h1>
    </Layout>
))

// const Post = withRouter(
//     props => (
//         <Layout>
//             <Content/>
//         </Layout>
//     )
// )

export default Content;