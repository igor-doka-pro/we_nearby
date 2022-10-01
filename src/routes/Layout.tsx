import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { ROOT_PAGE } from '../constants/path';

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isRootPage = pathname === ROOT_PAGE;

  useEffect(() => {
    if (isRootPage) {
      navigate('contacts');
    }
  }, [isRootPage]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
