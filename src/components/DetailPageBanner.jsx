import { useState } from 'react';
import detailPageBanner from '../detail-page-banner.json'
import shareIcon from '../assets/shareIcon.svg'
import unUseHeartIcon from '../assets/unUseHeartIcon.svg'
import useHeartIcon from '../assets/useHeartIcon.svg'

function ImgBanner({ src, dataOriginalUri }) {
  return (
    <div>
      <img className="hover:brightness-75 w-full" src={src} data-original-uri={dataOriginalUri}></img>
    </div>
  );
}

function Banner({ img }) {
  const mainIng = img.picMain;
  const detailImg = [img.pic1, img.pic2, img.pic3, img.pic4];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-lg overflow-hidden">
      <div className="col-span-2 row-span-2 -ml-2 -mb-2">
        <ImgBanner src={mainIng.https} dataOriginalUri={mainIng['data-original-uri']} />
      </div>
      {detailImg.map(eachImg => {
        return <ImgBanner src={eachImg.https} dataOriginalUri={eachImg['data-original-uri']} />;
      })}
    </div>
  );
}

function BannerTitle({ children }) {
  return <div className="text-2xl font-bold">{children}</div>;
}

function HeartButton({ useHeartIcon, unUseHeartIcon }) {
  const [valid, setValid] = useState(false);
  return (
    <button
      className="flex p-2 hover:bg-gray-200"
      onClick={() => {
        setValid(!valid);
      }}>
      <img className="mt-0.5 mr-2 size-5" src={valid ? useHeartIcon : unUseHeartIcon} />
      <div className="underline">{valid ? '저장 목록' : '저장'}</div>
    </button>
  );
}

function ShareButton({ shareIcon }) {
  return (
    <button className="flex p-2 mr-4 hover:bg-gray-200">
      <img className="mt-0.5 mr-2 size-5" src={shareIcon} />
      <div className="underline">공유하기</div>
    </button>
  );
}

function DetailPageBanner() {
  const img = detailPageBanner.detailPage1;
  const titleInfo = detailPageBanner.detailPage1.titleInfo;
  const icons = {
    shareIcon: shareIcon,
    unUseHeartIcon: unUseHeartIcon,
    useHeartIcon: useHeartIcon,
  };

  return (
    <div className="mx-20">
      <div className="flex justify-between mb-3">
        <BannerTitle>{titleInfo}</BannerTitle>

        <div className="flex items-end">
          <ShareButton shareIcon={icons.shareIcon} />

          <HeartButton unUseHeartIcon={icons.unUseHeartIcon} useHeartIcon={icons.useHeartIcon} />
        </div>
      </div>

      <Banner img={img} />
    </div>
  );
}

export default DetailPageBanner;
