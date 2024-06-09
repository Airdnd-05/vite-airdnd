import React, { useEffect, useState } from 'react';
import CommentList from './commentList.jsx';
import StarRating from './starRating.jsx';

// CommentForm 컴포넌트 정의
const CommentForm = ({ closeModal, submittedData, setSubmittedData, editIndex, setEditIndex }) => {
    const [formData, setFormData] = useState({
        userID: '',
        userPW: '',
        comment: '',
        ratings: Array(6).fill([false, false, false, false, false]),
    });
    const [error, setError] = useState('');
    const [averageRatings, setAverageRatings] = useState(Array(6).fill(0));
    const [averageRating, setAverageRating] = useState(0);

    const ratingLabels = ['청결도', '정확도', '체크인', '의사소통', '위치', '가격대비 만족도'];

    // submittedData가 변경될 때마다 평균 평점을 계산
    useEffect(() => {
        calculateAverageRating();
    }, [submittedData]);

    // editIndex가 변경될 때마다 formData를 초기화 또는 설정
    useEffect(() => {
        if (editIndex !== null) {
            setFormData(submittedData[editIndex]);
        } else {
            setFormData({
                userID: '',
                userPW: '',
                comment: '',
                ratings: Array(6).fill([false, false, false, false, false]),
            });
        }
    }, [submittedData, editIndex]);

    // 입력 값 변경 시 호출되는 함수
    const changeManager = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 별점 변경 시 호출되는 함수
    const starScore = (index, ratingIndex) => {
        const newRatings = formData.ratings.map((rating, idx) =>
            idx === index ? rating.map((_, rIdx) => rIdx <= ratingIndex) : rating
        );
        setFormData({ ...formData, ratings: newRatings });
    };

    // 댓글의 평균 평점을 계산하는 함수
    const calculateCommentAverageRating = (ratings) => {
        const totalRating = ratings.reduce((sum, rating) => sum + rating.filter(Boolean).length, 0);
        return totalRating / ratings.length;
    };

    // 폼 제출 시 호출되는 함수
    const submitManager = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            saveComment(formData);
        } else {
            addComment(formData);
        }
        calculateAverageRating();
    };

    // 새로운 댓글 추가 함수
    const addComment = (formData) => {
        const commentWithAverage = {
            ...formData,
            averageRating: calculateCommentAverageRating(formData.ratings)
        };
        setSubmittedData([...submittedData, commentWithAverage]);
        resetForm();
    };

    // 기존 댓글 저장 함수
    const saveComment = (formData) => {
        const updatedData = [...submittedData];
        updatedData[editIndex] = {
            ...formData,
            averageRating: calculateCommentAverageRating(formData.ratings)
        };
        setSubmittedData(updatedData);
        resetForm();
    };

    // 폼 초기화 함수
    const resetForm = () => {
        setFormData({
            userID: '',
            userPW: '',
            comment: '',
            ratings: Array(6).fill([false, false, false, false, false]),
        });
        setEditIndex(null);
        setError('');
    };

    // 전체 평균 평점 계산 함수
    const calculateAverageRating = () => {
        if (submittedData.length === 0) {
            setAverageRatings(Array(6).fill(0));
            setAverageRating(0);
            return;
        }

        const totalRatings = submittedData.reduce((acc, data) => {
            return data.ratings.map((rating, i) => {
                const ratingSum = rating.reduce((a, b, index) => (b ? index + 1 : a), 0);
                return acc[i] + ratingSum;
            });
        }, Array(6).fill(0));

        const averageRatings = totalRatings.map((sum, i) => sum / submittedData.length || 0);
        const overallAverage = averageRatings.reduce((a, b) => a + b, 0) / averageRatings.length;

        setAverageRatings(averageRatings);
        setAverageRating(overallAverage);
    };

    return (
        <div>
            <div className="average-ratings">
                <h2>전체 평점</h2>
                <div className="overall-summary">
                    <div className="overall-rating">{averageRating.toFixed(1)}</div>
                    <div className="total-comments">({submittedData.length}개의 댓글)</div>
                </div>
                <div className="rating-category flex space-x-6 mt-4">
                    {averageRatings.map((rating, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <strong>{ratingLabels[index]}</strong>
                            <div>{rating.toFixed(1)}</div>
                        </div>
                    ))}
                </div>
            </div>
            <CommentList submittedData={submittedData} setEditIndex={setEditIndex} />
            <form onSubmit={submitManager} className="bg-gray-100 p-5 rounded-lg shadow-md mt-5">
                <div className="mb-4">
                    <label className="block mb-1 font-bold">User ID:</label>
                    <input
                        type="text"
                        name="userID"
                        value={formData.userID}
                        onChange={changeManager}
                        disabled={editIndex !== null}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-bold">User PW:</label>
                    <input
                        type="password"
                        name="userPW"
                        value={formData.userPW}
                        onChange={changeManager}
                        disabled={editIndex !== null}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-bold">Comment:</label>
                    <input
                        type="text"
                        name="comment"
                        value={formData.comment}
                        onChange={changeManager}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="flex flex-wrap gap-4">
                    {formData.ratings.map((rating, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <label className="font-bold">{ratingLabels[index]}:</label>
                            <StarRating rating={rating} onRatingChange={(ratingIndex) => starScore(index, ratingIndex)} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        {editIndex !== null ? 'Save' : 'Submit'}
                    </button>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
                    >
                        닫기
                    </button>
                </div>
                {error && <p className="text-red-500 font-bold mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default CommentForm;
