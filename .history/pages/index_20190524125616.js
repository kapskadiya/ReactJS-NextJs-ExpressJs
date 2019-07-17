import Home from '../home'
import Layout from '../components/Layout';
import Blog from '../components/Blog';
 
const content = <p>Hello Watchmaxx</p>

// const home = () => (
//   <Layout content={content} />
// );

// const home = () => (
//   <Blog />
// );

const Index = props => (
  <Layout>
    <ul>
      <h1>Batman TV Show</h1>
    </ul>
  </Layout>
)


export default Index;
// const Page = () => <p>Hello Home page</p>
// export default Layout(Page);