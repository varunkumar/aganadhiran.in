import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header isTransparent={isHomePage} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
