import Home from '../home'
import dynamic from 'next/dynamic'

const Start = dynamic(()=>import("../home"),{
  loading: ()=><div>loading...</div>
})

const home = () => (
  <Start />
);

export default home;