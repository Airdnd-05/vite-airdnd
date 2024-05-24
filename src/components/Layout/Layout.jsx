/* eslint-disable react/prop-types */
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout({ children }) {
  // 최상단에 크기 조정 px로 ! full로 잡고 안에 컨텐츠들을 수정한다.
  return (
    <div className="flex flex-col">
      <Header />
      <main className="w-full h-full flex-grow px-40">
        <div className="max-w-[1120px] m-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
