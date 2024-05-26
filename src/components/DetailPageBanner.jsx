import { useState, createContext } from 'react';
import detailPageBanner from '../detail-page-banner.json';
import shareIcon from '../assets/shareIcon.svg';
import unUseHeartIcon from '../assets/unUseHeartIcon.svg';
import useHeartIcon from '../assets/useHeartIcon.svg';

const IconContext = createContext(shareIcon, useHeartIcon, unUseHeartIcon);
const mainImg = detailPageBanner.detailPage1.picMain;
const detailImg = [
  detailPageBanner.detailPage1.pic1,
  detailPageBanner.detailPage1.pic2,
  detailPageBanner.detailPage1.pic3,
  detailPageBanner.detailPage1.pic4,
];

const ImgContext = createContext(mainImg, detailImg);

function IconContextProvider({ children }) {
  return (
    <IconContext.Provider value={{ shareIcon, useHeartIcon, unUseHeartIcon }}>
      <div className="flex items-end">{children}</div>
    </IconContext.Provider>
  );
}

function ImgContextProvider({ children }) {
  return <ImgContext.Provider value={{ mainImg, detailImg }}>{children}</ImgContext.Provider>;
}

function MainImgBanner() {
  return (
    <div>
      <ImgContext.Consumer>
        {({ mainImg }) => {
          return (
            <img
              className="hover:brightness-75 w-full"
              src={mainImg.https}
              dataOriginalUri={mainImg['data-original-uri']}></img>
          );
        }}
      </ImgContext.Consumer>
    </div>
  );
}
function EachImgBanner() {
  return (
    <ImgContext.Consumer>
      {({ detailImg }) => {
        return detailImg.map(eachImg => {
          return (
            <div>
              <img
                className="hover:brightness-75 w-full"
                src={eachImg.https}
                dataOriginalUri={eachImg['data-original-uri']}></img>
            </div>
          );
        });
      }}
    </ImgContext.Consumer>
  );
}

function Banner() {
  return (
    <ImgContextProvider>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-lg overflow-hidden">
        <div className="col-span-2 row-span-2 -ml-2 -mb-2">
          <MainImgBanner />
        </div>
        <EachImgBanner />
      </div>
    </ImgContextProvider>

  );
}

function BannerTitle({ children }) {
  return <div className="text-2xl font-bold">{children}</div>;
}

function HeartButton() {

  const [valid, setValid] = useState(false);
  return (
    <button
      className="flex p-2 hover:bg-gray-200 hover:rounded-lg transition-all items-center"
      onClick={() => {
        setValid(!valid);
      }}>
      <IconContext.Consumer>
        {({ useHeartIcon, unUseHeartIcon }) => {
          return <img className="mt-0.5 mr-2 size-5" src={valid ? useHeartIcon : unUseHeartIcon} />;
        }}
      </IconContext.Consumer>
      <div className="underline pt-1">{valid ? '저장 목록' : '저장'}</div>
    </button>
  );
}

function ShareButton() {
  return (
    <button className="flex p-2 mr-4 hover:bg-gray-200">
      <IconContext.Consumer>
        {({ shareIcon }) => {
          return <img className="mt-0.5 mr-2 size-5" src={shareIcon} />;
        }}
      </IconContext.Consumer>
      <div className="underline pt-1">공유하기</div>
    </button>
  );
}

function DetailPageBanner() {
  const titleInfo = detailPageBanner.detailPage1.titleInfo;

  return (
    <div className="mt-6">
      <div className="flex justify-between mb-3">
        <BannerTitle>{titleInfo}</BannerTitle>

        <IconContextProvider>
          <ShareButton />
          <HeartButton />
        </IconContextProvider>
      </div>

      <Banner />
    </div>
  );
}

export default DetailPageBanner;
