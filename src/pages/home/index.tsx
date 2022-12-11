import React, { useContext, useEffect } from 'react';

import Header from '../../components/header';
import { AppContext } from '../../context/appContext';
import ListRender from '../../components/listRender';

const Home = () => {
  const { isDataFetched } = useContext(AppContext);

  useEffect(() => {
    console.log('isDataFetched', isDataFetched);
  }, [isDataFetched]);

  return (
    <>
      <Header />
      {isDataFetched && <ListRender />}
    </>
  );
};

export default Home;
