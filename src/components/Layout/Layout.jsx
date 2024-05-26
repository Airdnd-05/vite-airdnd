/* eslint-disable react/prop-types */
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout({ children }) {
  // 최상단에 크기 조정 px로 ! full로 잡고 안에 컨텐츠들을 수정한다.
  // 현재는 margin을 8.5rem으로 설정해 두었지만 언제든지 수정 가능
  // Header, Footer도 동일
  return (
    <div className="w-full flex flex-col">
      <Header />
      <main className="w-full flex-grow ">
        <div className="px-20 mx-[8.5rem]">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
