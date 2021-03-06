import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import NewConsult from '../pages/NewConsult';
import RegisteredConsults from '../pages/RegisteredConsults';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/new-consult" component={NewConsult} isPrivate />
    <Route
      path="/registered-consults"
      component={RegisteredConsults}
      isPrivate
    />
  </Switch>
);

export default Routes;
