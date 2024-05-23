/* eslint-disable react/prop-types */
import WingLeft from '../../assets/WingLeft.svg';
import WingRight from '../../assets/WingRight.svg';

function GuestFavorite({ rating, reviewCount, openModal }) {
  return (
    <div
      onClick={openModal}
      className="px-[22px] py-[26px] mx-0  mb-[12px] flex flex-row items-center justify-between border-b border-gray-400 border-solid rounded-lg cursor-pointer"
    >
      <div className="flex flex-row items-center justify-center w-2/12 pr-0.5">
        <img src={WingLeft} alt="WingLeft" className="w-9 h-9" />
        <div className="flex flex-col text-center">
          <span className="text-lg font-semibold leading-none">게스트 선호</span>
        </div>
        <img src={WingRight} alt="WingRight" className="w-9 h-9" />
      </div>
      <div className="flex flex-row items-center justify-center w-5/12 pr-0.5">
        <span className="text-base font-semibold leading-6">에어비앤비 게스트에게 가장 사랑받는 숙소</span>
      </div>
      <div className="flex flex-col items-center justify-center pr-0.5 w-1/8">
        <span className="text-2xl font-semibold">{rating}</span>
        <span className="text-sm">★★★★★</span>
      </div>
      <div className="flex flex-col items-center justify-center pl-0.5 border-l border-gray-300 border-solid w-1/8">
        <span className="text-xl font-semibold">{reviewCount}개</span>
        <span 
          className="text-base underline"          
        >
          후기
        </span>
      </div>
    </div>
  );
}

export default GuestFavorite;
