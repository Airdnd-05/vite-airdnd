/* eslint-disable react/prop-types */
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full h-full flex-grow px-40">
        <div className="max-w-[1120px] m-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
