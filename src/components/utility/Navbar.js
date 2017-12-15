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
        {/* <div className="nav-logo"> */}
        { <Link to="/" className="standard-button nav-logo" ><strong>Music App</strong></Link>}
        {' '}
        {/* </div> */}
        {/* { <Link to="/" className="standard-button" >Home</Link>}
        {' '} */}
        {/* { !Auth.isAuthenticated() && <Link to={`/users/${user.id}`} className="standard-button" >Profile</Link>}
        {' '} */}
        {/* <div className="nav-links"> */}
        { <Link to="/discover" className="standard-button"   >Discover</Link>}
        {' '}
        {/* </div> */}
        { <Link to="/bands/new" className="standard-button" >+   Band</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/login"   className="standard-button" >Login</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/register"   className="standard-button">Register</Link>}
        {' '}
        { Auth.isAuthenticated() && <a href="#"   className="standard-button" onClick={logout}>Logout</a>}

        {/* <div className=""> */}

        {/* </div> */}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
