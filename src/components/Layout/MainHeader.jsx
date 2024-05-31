import clsx from 'clsx';
import { useState } from 'react';
import HeaderLogo from '../../assets/HeaderLogo.svg';
import HeaderWorld from '../../assets/HeaderWorld.svg';
import HeaderProfile from '../HeaderProfile.jsx';
import SearchBar from './SearchBar.jsx';
import HeaderNavItem from '../HeaderNavItem.jsx';

function MainHeader() {
  const [selected, setSelected] = useState('accommodation');
  const MainNav = [
    {
      key: 'accommodation',
      title: '숙소',
    },
    {
      key: 'experience',
      title: '체험',
    },
    {
      key: 'online',
      title: '온라인 체험',
    },
  ];
  return (
    <>
      <header className="h-[168px] bg-white border-b border-solid border-gray-200 px-20">
        <div className="grid grid-cols-3 h-[80px] mx-[8.5rem]">
          <div className="flex">
            <img className="w-[102px]" src={HeaderLogo} />
          </div>
          <nav className="flex items-center justify-center">
            <ul className="flex justify-center items-center">
              {MainNav.map(nav => (
                <HeaderNavItem nav={nav} selected={selected} onSelected={setSelected} key={nav.key} />
              ))}
            </ul>
          </nav>
          <div className="flex flex-row justify-end">
            <div className="flex flex-row items-center">
              <p className="mr-5 text-sm">당신의 공간을 에어비앤비하세요.</p>
              <img src={HeaderWorld} />
            </div>
            <HeaderProfile />
          </div>
        </div>
        <SearchBar />
      </header>
    </>
  );
}

export default MainHeader;
