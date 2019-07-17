import Home from '../home'
import dynamic from 'next/dynamic'

const start = dynamic(()=>import(Home),{
  loading: ()=><div>loading...</div>
})

const home = () => (
  <Home />
);

export default home;