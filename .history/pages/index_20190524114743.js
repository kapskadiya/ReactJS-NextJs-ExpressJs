import Home from '../home'
import Layout from '../components/Layout';

// const home = () => (
//   <Layout>
//     <p>Hello Watchmaxx</p>
//   </Layout>
// );

const home = () => <p>Hello Home page</p>
export default withLayout(home);