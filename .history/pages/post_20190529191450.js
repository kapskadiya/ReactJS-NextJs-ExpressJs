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
    <>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary}</p>
        <img src={props.show.image.medium} />
    </>
)

Post.getInitialProps = async function(ctx){
    const { id } = ctx.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post;