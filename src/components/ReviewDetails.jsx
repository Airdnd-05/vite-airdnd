import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import commentCheck from '../assets/comment_check.svg';
import commentHowmuch from '../assets/comment_howmuch.svg';
import commentKey from '../assets/comment_key.svg';
import commentLeftWing from '../assets/comment_leftwing.svg';
import commentRightWing from '../assets/comment_rightwing.svg';
import commentSpray from '../assets/comment_spray.svg';
import commentTalkbox from '../assets/comment_talkbox.svg';
import commentWay from '../assets/comment_way.svg';
import commentsData from '../comments.json';

// Chart.js의 구성 요소를 등록
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ReviewDetails = () => {
    const [comments, setComments] = useState([]); // 댓글 데이터를 저장할 상태
    const [averageRating, setAverageRating] = useState(0); // 평균 평점을 저장할 상태
    const [ratingCounts, setRatingCounts] = useState([0, 0, 0, 0, 0]); // 각 평점의 개수를 저장할 상태

    useEffect(() => {
        // commentsData에서 댓글을 가져와서 상태에 저장
        const fetchedComments = commentsData;
        setComments(fetchedComments);

        // 댓글에서 평점을 추출하여 평균 평점을 계산
        const ratings = fetchedComments.map(comment => comment.rating);
        const avgRating = (ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length).toFixed(1);
        setAverageRating(avgRating);

        // 각 평점의 개수를 계산하여 상태에 저장
        const counts = [0, 0, 0, 0, 0];
        ratings.forEach(rating => {
            counts[5 - rating]++;
        });
        setRatingCounts(counts);
    }, []);

    // 댓글이 3개 미만일 경우 출력안하기
    if (comments.length < 3) {
        return null;
    }

    // Chart.js의 데이터와 옵션을 설정합니다.
    const data = {
        labels: ['5', '4', '3', '2', '1'],
        datasets: [
            {
                label: 'Rating Counts',
                data: ratingCounts,
                backgroundColor: 'rgba(255, 206, 86, 0.6)', // 바의 배경색
                borderColor: 'rgba(255, 206, 86, 1)', // 바의 테두리 색
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y', // 막대그래프
        scales: {
            x: {
                beginAtZero: true,
                max: Math.max(...ratingCounts) + 1, // x축의 최대값 설정
            },
        },
    };

    return (
        <div className="max-w-2xl mx-auto p-4 text-center mb-6">
            <div className="mb-8 relative inline-block">
                <img src={commentLeftWing} alt="left wing" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12" />
                <h1 className="text-6xl font-bold mb-2 inline-block mx-16">{averageRating}</h1>
                <img src={commentRightWing} alt="right wing" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12" />
            </div>
            <p className="text-xl">게스트 선호</p>
            <p className="text-md text-gray-500">평점, 후기, 신뢰도 기준</p>
            <p className="text-md text-gray-500">에어비앤비에서 가장 사랑받는 숙소</p>
            <div className="flex flex-wrap justify-around mb-8">
                <div className="flex flex-col items-center mb-4 border-l-2 border-gray-300 pl-4 w-40">
                    <p className="font-semibold">전체 평점</p>
                    <div className="w-full">
                        <Bar data={data} options={options} /> {/* 전체 평점 바 차트 */}
                    </div>
                </div>
                <div className="flex flex-col items-center mb-4 border-l-2 border-gray-300 pl-4">
                    <p className="font-semibold">청결도</p>
                    <p className="text-xl">5.0</p>
                    <img src={commentSpray} alt="spray" className="w-8 h-8 mt-2" />
                </div>
                <div className="flex flex-col items-center mb-4 border-l-2 border-gray-300 pl-4">
                    <p className="font-semibold">정확도</p>
                    <p className="text-xl">5.0</p>
                    <img src={commentCheck} alt="check" className="w-8 h-8 mt-2" />
                </div>
                <div className="flex flex-col items-center mb-4 border-l-2 border-gray-300 pl-4">
                    <p className="font-semibold">체크인</p>
                    <p className="text-xl">5.0</p>
                    <img src={commentKey} alt="key" className="w-8 h-8 mt-2" />
                </div>
                <div className="flex flex-col items-center mb-4 border-l-2 border-gray-300 pl-4">
                    <p className="font-semibold">의사소통</p>
                    <p className="text-xl">5.0</p>
                    <img src={commentTalkbox} alt="talkbox" className="w-8 h-8 mt-2" />
                </div>
                <div className="flex flex-col items-center mb-4 border-l-2 border-gray-300 pl-4">
                    <p className="font-semibold">위치</p>
                    <p className="text-xl">4.8</p>
                    <img src={commentWay} alt="way" className="w-8 h-8 mt-2" />
                </div>
                <div className="flex flex-col items-center mb-4 border-l-2 border-gray-300 pl-4">
                    <p className="font-semibold">가격 대비 만족도</p>
                    <p className="text-xl">4.9</p>
                    <img src={commentHowmuch} alt="howmuch" className="w-8 h-8 mt-2" />
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;
