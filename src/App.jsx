import './App.css';
import DetailPageBanner from './components/DetailPageBanner.jsx';
import Layout from './components/Layout/Layout.jsx';
import ReviewDetails from './components/ReviewDetails';
import AmenityInfo from './components/briefInfo/AmenityInfo.jsx';
import BriefInfo from './components/briefInfo/BriefInfo.jsx';
import Comment from './components/comment';
import CommentModal from './components/commentModal.jsx';
import HostDetail from './components/hostDetail/HostDetail.jsx';
function App() {
  return (
    <>
      <Layout>
        {/* 여기 넣으세요!@ */}
        <DetailPageBanner />
        <BriefInfo />
        <AmenityInfo />
        <ReviewDetails />
        <Comment />
        <CommentModal />
        <HostDetail />
      </Layout>
    </>
  );
}

export default App;
