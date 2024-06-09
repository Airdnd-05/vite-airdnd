import { useState } from 'react';
import commentsData from '../comments.json';

const Comment = () => {
  const [comments, setComments] = useState(commentsData.slice(0, 6));


  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="border-t border-gray-300 pt-4 mt-4 flex">
            <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex-shrink-0"></div>
            <div>
              <p className="text-lg font-semibold">{comment.name}</p>
              <p className="text-sm text-gray-600">{comment.location}</p>
              <p className="text-sm">
                {'★'.repeat(comment.rating)}
                {'☆'.repeat(5 - comment.rating)} {comment.date}
              </p>
              <p className="mt-2">{comment.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </div>
  );

};

export default Comment;
