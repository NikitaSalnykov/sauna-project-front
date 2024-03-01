import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback="....">
        <Outlet />
      </Suspense>
      <Footer/>
    </>
  );
};

export default SharedLayout;
