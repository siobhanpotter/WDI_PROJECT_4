import React                from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/');
  }

  return(
    <nav className="nav">
      { <Link to="/" className="standard-button" ><strong>Music App</strong></Link>}
      {' '}
      { <Link to="/" className="standard-button" >Home</Link>}
      {' '}
      { <Link to="/discover" className="standard-button" >Index</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link to="/login" className="standard-button" >Login</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link>}
      {' '}
      { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a>}
    </nav>
  );
};

export default withRouter(Navbar);
