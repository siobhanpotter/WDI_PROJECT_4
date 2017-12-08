import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';
import MainIndex from '../bands/MainIndex';
import BandsNew from '../bands/BandsNew';
import BandsShow from '../bands/BandsShow';
import UsersShow from '../users/UsersShow';
import UsersEdit from '../users/UsersEdit';
// import RequestsNew from '../users/RequestsNew';


// import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/bandsandusers" component={MainIndex} />
      <Route path="/bands/new" component={BandsNew} />
      <Route path="/bands/:id" component={BandsShow} />
      <Route path="/users/:id/edit" component={UsersEdit} />
      <Route path="/users/:id" component={UsersShow} />
      {/* <Route path="/requests/new" component={RequestsNew} /> */}
    </Switch>
  );
};

export default Routes;
