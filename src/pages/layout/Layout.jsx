import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

const Layout = () => {
  return (
    <>
      {/* COMPONENT */}
      <Header />
      {/* CONTENT */}
      <Outlet />
      {/* COMPONENT */}
      <Footer />
    </>
  );
};

export { Layout };
