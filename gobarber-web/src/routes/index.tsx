import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SiginIn';
import SignUp from '../pages/SiginUp';

const Routes = () => {
  return (
    <Switch>
      <Route component={SignIn} path="/" exact />
      <Route component={SignUp} path="/signup" />
    </Switch>
  );
};
export default Routes;
