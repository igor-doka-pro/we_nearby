import { useLocation } from 'react-router-dom';
import { dataABreadcrumbs as data } from './data';
import { ROOT_PAGE } from 'constants/path';
import { getPathFromURL } from 'utils/url/pageNameFromURL';
import './ABreadcrumbs.scss';

export const ABreadcrumbs = () => {
  const { pathname: url } = useLocation();
  const path = getPathFromURL(url);
  const pageName = path ? data[path] : null;
  const rootPageName = data[ROOT_PAGE];

  return (
    <>
      {pageName && (
        <>
          <span className="breadcrumbs__item">{`${rootPageName} - `}</span>
          <span className="breadcrumbs__item breadcrumbs__item_current">{pageName}</span>
        </>
      )}
    </>
  );
};
