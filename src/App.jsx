import './App.css';
import DetailPageBanner from './components/DetailPageBanner.jsx';
import Layout from './components/Layout/Layout.jsx';
import HostDetail from './components/hostDetail/HostDetail.jsx'
import BriefInfo from './components/briefInfo/BriefInfo.jsx';
import AmenityInfo from './components/briefInfo/AmenityInfo.jsx'

function App() {
  return (
    <>
      <Layout>
        <DetailPageBanner />
        <BriefInfo />
        <AmenityInfo />
        <HostDetail />
      </Layout>
    </>
  );
}

export default App;
