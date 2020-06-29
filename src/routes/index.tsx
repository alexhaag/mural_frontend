import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
