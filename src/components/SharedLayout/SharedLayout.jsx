import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import Background from '../Background/Background';


const SharedLayout = () => {
  return (
    <>
      <Header />
      <Background/>
      <Suspense fallback="....">
        <Outlet />
      </Suspense>
      <Footer/>
    </>
  );
};

export default SharedLayout;
