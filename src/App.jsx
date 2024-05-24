import './App.css';
import DetailPageBanner from './components/DetailPageBanner.jsx';
import Layout from './components/Layout/Layout.jsx';
import HostDetail from './components/HostDetail.jsx';
import BriefInfo from './components/briefInfo/BriefInfo.jsx';
import AmenityInfo from './components/briefInfo/AmenityInfo.jsx'
import ContextTest from './components/context/ContextTest.jsx';

function App() {
  return (
    <>
      <Layout>
        <DetailPageBanner />
        <BriefInfo />
        <AmenityInfo />
        <HostDetail />
        <ContextTest />        
      </Layout>
    </>
  );
}

export default App;
