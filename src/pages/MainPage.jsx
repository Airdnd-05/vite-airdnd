import '../App.css';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';

function MainPage() {
  return (
    <>
      <Layout>
        {/* 여기 넣으세요!@ */}
        {/* 카테고리 바 컴포넌트 위치입니다. */}
        <div className="flex flex-row justify-center items-center h-[90px] text-2xl bg-blue-300">
          카테고리 바 위치입니다.
        </div>
        {/* 이미지 카드 컴포넌트 위치입니다. */}
        <div className="grid items-center justify-center grid-cols-5 gap-4 grid-rows-8 bg-violet-300">
          <Link
            to="/accommodation/1"
            className="bg-white h-[365px] w-[230px] flex flex-row justify-center items-center">
            1번 숙소 이미지카드
          </Link>
        </div>
      </Layout>
    </>
  );
}

export default MainPage;
