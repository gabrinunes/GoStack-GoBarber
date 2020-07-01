import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SiginIn';
import SignUp from './pages/SiginUp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={SignIn} path="/" exact />
      <Route component={SignUp} path="/signUp" />
    </BrowserRouter>
  );
};
export default Routes;
