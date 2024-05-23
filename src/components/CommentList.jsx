import React from 'react';
import StarRating from './StarRating';

const CommentList = ({ submittedData, setEditIndex }) => {
    const convertAverageToRatingArray = (average) => {
        return [0, 1, 2, 3, 4].map(index => index < average);
    };

    return (
        <div className="comment-list">
            {submittedData.map((data, index) => (
                <div key={index} className="comment-item bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                    <div className="comment-header flex justify-between items-start">
                        <div className="flex items-center">
                            <StarRating
                                rating={convertAverageToRatingArray(data.averageRating)}
                                readOnly={true}
                            />
                            <span className="text-gray-500 text-sm ml-2">({data.userID})</span>
                        </div>
                    </div>
                    <div className="comment-body mt-2">
                        <p>{data.comment}</p>
                    </div>
                    <div className="comment-footer mt-2">
                        <button
                            onClick={() => setEditIndex(index)}
                            className="text-blue-500 text-xs"
                            style={{ fontSize: '0.25rem' }}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
