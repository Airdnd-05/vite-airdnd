// App.js
import React from 'react';
import './App.css';
import DetailPageBanner from './components/DetailPageBanner.jsx';
import Layout from './components/Layout/Layout.jsx';
import ReviewDetails from './components/ReviewDetails';
import BriefInfo from './components/briefInfo/BriefInfo.jsx';
import Comment from './components/comment';
import CommentModal from './components/commentModal.jsx';
import HostDetail from './components/hostDetail/HostDetail.jsx';

function App() {
  return (
    <>
      <Layout>
        <DetailPageBanner />
        <BriefInfo />

        <HostDetail />
        <ReviewDetails />
        <Comment />
        <CommentModal />
      </Layout>
    </>
  );
}

export default App;
