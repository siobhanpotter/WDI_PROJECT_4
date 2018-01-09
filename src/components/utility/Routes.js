import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';
import DiscoverIndex from '../bands/DiscoverIndex';
import BandsIndex from '../bands/BandsIndex';
import BandsNew from '../bands/BandsNew';
import BandsShow from '../bands/BandsShow';
import UsersIndex from '../users/UsersIndex';
import UsersShow from '../users/UsersShow';
import UsersEdit from '../users/UsersEdit';
import RequestsIndex from '../requests/RequestsIndex';
import RequestsNew from '../requests/RequestsNew';
import Home from '../home/Home';


// import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/discover" component={DiscoverIndex} />
      <Route path="/bands/:id/requests/new" component={RequestsNew} />
      <Route path="/bands/new" component={BandsNew} />
      <Route path="/bands/:id" component={BandsShow} />
      <Route path="/bands" component={BandsIndex} />
      <Route path="/users/:id/edit" component={UsersEdit} />
      <Route path="/users/:id" component={UsersShow} />
      <Route path="/users" component={UsersIndex} />
      <Route path="/requests" component={RequestsIndex} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
