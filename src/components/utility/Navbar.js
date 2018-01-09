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
      <div row={12}>
        { <Link to="/" className="standard-button nav-logo" ><strong>MUSIC BOX</strong></Link>}
        {' '}
        { !!Auth.isAuthenticated() && <Link to="/requests" className="standard-button" >Requests</Link>}
        {' '}
        { <Link to="/discover" className="standard-button"   >Discover</Link>}
        {' '}
        { !!Auth.isAuthenticated() && <Link to="/bands/new" className="standard-button" >+   Band</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/login"   className="standard-button" >Login</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/register"   className="standard-button">Register</Link>}
        {' '}
        { Auth.isAuthenticated() && <a href="#"   className="standard-button" onClick={logout}>Logout</a>}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
