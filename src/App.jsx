import React from 'react';
import CommentForm from './components/CommentForm';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>댓글창</h1>
      <CommentForm />
    </div>
  );
};

export default App;
