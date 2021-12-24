import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
