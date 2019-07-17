import Home from '../home'
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Link from 'next/link';
 
const content = <p>Hello Watchmaxx</p>

// const home = () => (
//   <Layout content={content} />
// );

// const home = () => (
//   <Blog />
// );

const Index = props => (
  <Layout>
    <h1>Batman TV Show</h1>
    <ul>
      {
        props.shows.map(show=>(
          <li>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  </Layout>
)


export default Index;
// const Page = () => <p>Hello Home page</p>
// export default Layout(Page);