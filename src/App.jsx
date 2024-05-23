import './App.css';
import DetailPageBanner from './components/DetailPageBanner.jsx';
import Layout from './components/Layout/Layout.jsx';
import HostDetail from './components/HostDetail.jsx'

function App() {
  return (
    <>
      <Layout>
        <DetailPageBanner />
        <HostDetail />
      </Layout>
    </>
  );
}

export default App;
