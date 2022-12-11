import React, { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import NotFound from './components/notFound';
import UserInfo from './components/userInfo';
import { LangContext } from './context/langContext';
import Home from './pages/home';

const App = () => {
  const { direction } = useContext(LangContext);

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);
  return (
    <div id="rootHTML" style={{ direction }}>
      <Layout>
        <Routes>
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/user/:id" element={<UserInfo />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
