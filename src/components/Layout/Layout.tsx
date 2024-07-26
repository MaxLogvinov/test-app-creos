import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Layout as L } from 'antd';
import './Layout.scss';

const Layout = () => {
  return (
    <L className="layout">
      <Header />
      <Outlet />
      <Footer />
    </L>
  );
};

export default Layout;
