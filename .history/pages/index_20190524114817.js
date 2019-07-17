import Home from '../home'
import withLayout from '../components/Layout';

// const home = () => (
//   <Layout>
//     <p>Hello Watchmaxx</p>
//   </Layout>
// );

const Page = () => <p>Hello Home page</p>
export default withLayout(Page);