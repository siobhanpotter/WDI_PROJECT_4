import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';
import BandsUsersIndex from '../bands/BandsUsersIndex';
import CreateBand from '../bands/CreateBand';


// import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/bandsandusers" component={BandsUsersIndex} />
      <Route path="/createband" component={CreateBand} />
    </Switch>
  );
};

export default Routes;
