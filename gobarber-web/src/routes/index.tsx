import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SiginIn';
import SignUp from '../pages/SiginUp';
import ForgotPasswrod from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={SignIn} path="/" exact />
      <Route component={SignUp} path="/signup" />
      <Route component={ForgotPasswrod} path="/forgot-password" />
      <Route component={ResetPassword} path="/reset-password" />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};
export default Routes;
