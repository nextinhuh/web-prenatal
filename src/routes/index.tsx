import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import NewConsult from '../pages/NewConsult';
/* import ResetPassword from '../pages/ResetPassword';


import Profile from '../pages/Profile'; */

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/new-consult" component={NewConsult} />

    {/* <Route path="/forgot-password" component={ForgotPassword} />

    
    <Route path="/profile" component={Profile} isPrivate /> */}
  </Switch>
);

export default Routes;
