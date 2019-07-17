import { withRouter } from 'next/router';
import Layout from '../components/Layout';

// const Post = withRouter( props => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//     </Layout>
// ))

// const Post = withRouter(
//     props => (
//         <Layout>
//             <Content/>
//         </Layout>
//     )
// )

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
)

export default Post;