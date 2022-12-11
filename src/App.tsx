import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import NotFound from './components/notFound';
import Home from './pages/home';

const App = () => {
  return (
    <div id="scroll-view">
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
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
