import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

import './styles.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDataFetched } = useContext(AppContext);

  return (
    <div className={`app-wrapper ${isDataFetched && 'hide-height'}`}>
      <div className={`app-content`}>{children}</div>
    </div>
  );
};

export default Layout;
