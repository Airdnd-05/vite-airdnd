import { useRef, useState } from 'react';
import HeaderProfileModal from './Modal/HeaderProfileModal.jsx';
import HeaderProfileLogo from '../assets/HeaderProfile.svg';
import useOnClickOutside from './hooks/useOnclickOutside.jsx';

function HeaderProfile() {
  const [modal, setModal] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setModal(false);
  });

  const handleButtonClick = () => {
    setModal(prev => !prev);
  };

  return (
    <div className="flex relative">
      <div className="flex flex-column items-center ml-5 relative cursor-pointer" onClick={handleButtonClick}>
        <div className="w-[81px] h-[41px] flex flex-row items-center justify-around bg-white rounded-[29px] border border-solid border-gray-200 p-1px hover:shadow-md">
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
            <div className="w-3.5 h-[0px] border border-solid border-gray-800"></div>
          </div>
          <img src={HeaderProfileLogo} />
        </div>
      </div>
      {modal && <HeaderProfileModal ref={ref} />}
    </div>
  );
}

export default HeaderProfile;
