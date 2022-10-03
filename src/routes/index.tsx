import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './Layout/Layout';
import {
  ROOT_PAGE,
  PROJECTS_PAGE,
  ABOUT_COMPANY_PAGE,
  CONTACTS_PAGE,
  NOT_FOUND_PAGE,
} from '../constants/path';

const Projects = lazy(() => import('./Projects'));
const AboutCompany = lazy(() => import('./AboutCompany'));
const Contacts = lazy(() => import('./Contacts/Contacts'));

const preload = <div>Загрузка...</div>;
const notFound = 404;

export const Router = () => {
  return (
    <Routes>
      <Route path={ROOT_PAGE} element={<Layout />}>
        <Route
          path={PROJECTS_PAGE}
          element={
            <Suspense fallback={preload}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path={ABOUT_COMPANY_PAGE}
          element={
            <Suspense fallback={preload}>
              <AboutCompany />
            </Suspense>
          }
        />
        <Route
          path={CONTACTS_PAGE}
          element={
            <Suspense fallback={preload}>
              <Contacts />
            </Suspense>
          }
        />
      </Route>

      <Route path={NOT_FOUND_PAGE} element={notFound} />
    </Routes>
  );
};
