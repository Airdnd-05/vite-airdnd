import './App.css';
import Layout from './components/Layout/Layout.jsx';
import ReviewDetails from './components/ReviewDetails'; // ReviewDetails 컴포넌트를 import
import Comment from './components/comment'; // Comment 컴포넌트를 import

function App() {
  return (
    <>
      <Layout>

        <ReviewDetails />
        <Comment />
      </Layout>


    </>
  );
}

export default App;
