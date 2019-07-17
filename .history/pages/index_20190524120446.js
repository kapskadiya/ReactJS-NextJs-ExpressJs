import Home from '../home'
import Layout from '../components/Layout';
 
const content = <p>Hello Watchmaxx</p>

// const home = () => (
//   <Layout content={content} />
// );

const home = () => (
  <Layout>
    <p>Hello Watchmaxx</p>
  </Layout>
);

export default home;
// const Page = () => <p>Hello Home page</p>
// export default Layout(Page);