import Home from '../home'
import Layout from '../components/Layout';
import Blog from '../components/Blog';
 
const content = <p>Hello Watchmaxx</p>

// const home = () => (
//   <Layout content={content} />
// );

const home = () => (
  <Blog />
);

export default home;
// const Page = () => <p>Hello Home page</p>
// export default Layout(Page);